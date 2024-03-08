import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5256',  // api要call的網址
    timeout:2000
})

export default API;