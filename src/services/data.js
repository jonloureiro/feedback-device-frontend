import api from './api';


const getData = async () => {
  try {
    const data = await api.get('/data');
    return {
      error: false,
      data,
    };
  } catch (err) {
    const data = (err.response) ? {
      status: err.response.status || undefined,
      statusText: err.response.statusText || undefined,
      message: err.response.data.messages || undefined,
    } : {
      status: 999,
      statusText: 'Unknown',
      message: 'Erro desconhecido, verifique sua conexão',
    };
    return {
      error: true,
      data,
    };
  }
};


export { getData as default };
