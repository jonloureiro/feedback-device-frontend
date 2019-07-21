/* eslint-disable import/prefer-default-export */

const localhost = (process.env.REACT_APP_BASE_URL === 'localhost')
  ? `${window.location.protocol}//${window.location.hostname}${process.env.REACT_APP_PORT || ''}`
  : undefined;

const baseURL = localhost || process.env.REACT_APP_BASE_URL || 'https://jonloureiro-museu.herokuapp.com';


export { baseURL };
