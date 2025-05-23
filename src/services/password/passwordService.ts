import api from "../api/Api";


export const generatePassword = async () => {
  const res = await api.post('/items/generate');
  return res.data.password;
};

export const getPasswords = async () => {
  const res = await api.get('/items');
  return res.data;
};

export const deletePassword = async (id: string) => {
  return await api.delete(`/items/${id}`);
};
