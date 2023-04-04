import axios from "axios";

const token = localStorage.getItem('esvaziadev') ? localStorage.getItem('esvaziadev') : null;
const api = axios.create({
    baseURL: `http://localhost:8001/api`,
});

if(token){
    api.defaults.headers.authorization = `Bearer ${token}`;
}


export default api