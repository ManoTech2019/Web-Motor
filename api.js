import axios from 'axios';

const api = axios.create({
    baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1&api_key='
});

export default api;