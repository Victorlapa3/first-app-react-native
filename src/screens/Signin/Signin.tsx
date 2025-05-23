import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function Signin({ navigation }) {
  const { onLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await onLogin({ email, password });
    } catch (err) {
      setError('Credenciais inválidas.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {!!error && <Text style={styles.error}>{error}</Text>}
      <Pressable style={[styles.button, !(email && password) && styles.disabled]} onPress={handleLogin} disabled={!(email && password)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Text onPress={() => navigation.navigate('Signup')} style={styles.link}>Não tem conta? Cadastre-se</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff' },
  disabled: { backgroundColor: '#aaa' },
  error: { color: 'red', marginBottom: 10 },
  link: { marginTop: 10, color: 'blue', textAlign: 'center' }
});