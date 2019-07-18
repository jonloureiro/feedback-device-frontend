import api, { response, responseError } from './api';


const logout = async () => {
  try {
    const { status, statusText, data } = await api.post('/user/logout');
    return response(false, status, statusText, data);
  } catch (err) {
    return responseError(err);
  }
};


export default logout;
