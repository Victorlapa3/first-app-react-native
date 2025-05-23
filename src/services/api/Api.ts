import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8080', // altere conforme o IP do backend
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('access-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
