import axios from "axios"

export default request = axios.create({
    baseURL:"http://192.168.31.141:8080",
    // baseURL:"http://172.20.10.7:8080",
    // baseURL:"http://172.20.10.7:8080",
    timeout:5000,
})

