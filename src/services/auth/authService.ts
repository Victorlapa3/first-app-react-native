import api from "../api/Api";

export const signin = async (email: string, password: string) => {
  const res = await api.post('/auth/signin', { email, password });
  return res.data;
};

export const signup = async (data: any) => {
    const res = await api.post('/auth/signup', data); 
    return res.data;
  };

export const signout = async () => {
  return await api.get('/auth/signout');
};