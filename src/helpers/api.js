import Axios from 'axios';

import { baseURL } from '../config';


const api = Axios.create({ baseURL });


export default api;
