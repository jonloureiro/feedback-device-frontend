import api, { response, responseError } from './api';


const login = async (email, password) => {
  try {
    const { status, statusText, data } = await api.post('/user/login', { email, password });
    return response(false, status, statusText, data);
  } catch (err) {
    return responseError(err);
  }
};


export default login;
