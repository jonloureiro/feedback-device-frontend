import Axios from 'axios';

import { baseURL } from '../config';


const api = Axios.create({
  baseURL,
  withCredentials: true,
  timeout: 2000,
});

const response = (error, status, statusText, message) => ({
  error,
  response: {
    status: status || undefined,
    statusText: statusText || undefined,
    message: message || undefined,
  },
});

const responseError = err => ((err.response)
  ? response(
    true,
    err.response.status,
    err.response.statusText,
    err.response.data.messages,
  ) : response(
    true,
    999,
    'Unknown',
    'Erro desconhecido, verifique sua conexão',
  )
);

export { api as default, response, responseError };
