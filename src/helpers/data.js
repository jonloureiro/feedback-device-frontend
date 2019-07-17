import api, { responseError } from './api';


const getData = async () => {
  try {
    const data = await api.get('/data');
    return {
      error: false,
      data,
    };
  } catch (err) {
    return responseError(err);
  }
};


export { getData as default };
