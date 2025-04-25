import api from '../../utils/api';

export const signin = (email, password) => {
  return api.post("/auth/signin", {
    email,
    password,
  });
};

export const signup = (data) => {
  return api.post("/auth/signup", data);
};

export const signout = () => {
  return api.get("/auth/signout");
};
