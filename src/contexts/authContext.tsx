import React, { createContext, useEffect, useState, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import { signin, signup } from '../services/auth/AuthService';


const TOKEN_KEY = 'access-token';

interface AuthState {
  token: string;
  authenticated: boolean | null;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthdate: string;
  }  

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextProps {
  authState?: AuthState;
  onRegister?: (data: RegisterData) => Promise<void>;
  onLogin?: (data: LoginData) => Promise<void>;
  onLogout?: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({ token: '', authenticated: null });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        setAuthState({ token, authenticated: true });
      } else {
        setAuthState({ token: '', authenticated: false });
      }
    };
    loadToken();
  }, []);

  const onRegister = async (data: RegisterData) => {
    const res = await signup(data);
    await SecureStore.setItemAsync(TOKEN_KEY, res.token);
    setAuthState({ token: res.token, authenticated: true });
  };

  const onLogin = async (data: LoginData) => {
    const res = await signin(data.email, data.password);
    await SecureStore.setItemAsync(TOKEN_KEY, res.token);
    setAuthState({ token: res.token, authenticated: true });
  };

  const onLogout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    setAuthState({ token: '', authenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authState, onLogin, onRegister, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
