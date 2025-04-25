import * as authResource from './authResource';

export const signin = (email, password) => {
    return authResource.signin(email, password).then(response => response.data);
};

export const signup = (data) => {
    return authResource.signup(data).then(response => response.data);
}

export const signout = (data) => {
    return authResource.signout().then(response => response.data);
}