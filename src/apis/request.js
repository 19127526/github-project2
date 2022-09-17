import axios from 'axios'
import Notification from "../components/Notification/Notification";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

request.interceptors.response.use(async response =>{
    return response;

}, async error => {
    if(error.response.status===422){
        Notification("Thông báo","Đã tìm hết người dùng")
        return "end";
    }
    if(error.response.status===403){
        Notification("Thông báo","Api hết hạn")
        return "end"
    }
})


request.interceptors.request.use(request=>{
    return request;
})


export default request