import api, { responseError } from './api';


const getData = async () => {
  try {
    const response = await api.get('/data');
    return {
      error: false,
      response,
    };
  } catch (err) {
    return responseError(err);
  }
};


export { getData as default };
