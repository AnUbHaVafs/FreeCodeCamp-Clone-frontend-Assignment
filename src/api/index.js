import axios from "axios";

const BASEURL = process.env.REACT_APP_API_URL;

// axios.interceptors.request.use(function (config, _onRejected) {
//     config.headers['auth-token'] = localStorage.getItem('token') || '';
//     return config;
// });
export const userSignin = (data) => axios.post('http://localhost:2000/api/signin', data);
export const getAllCourses = () => axios.get('http://localhost:2000/api/course');