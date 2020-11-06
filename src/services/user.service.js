//import config from 'config';
import { authHeader, handleResponse } from '../helpers';
import axios from 'axios'
import swal from 'sweetalert'

export const userService = {
    getData,
    postData
};

//GET DATA
function getData(apiGet) {
    const requestOptions = {timeout: 15000 };
    return axios.get(apiGet, requestOptions)
        .then(user =>{
            return user;
        })
        .catch(error => {
            if (!error.response) {
                swal("Terjadi Kesalahan Saat Mengambil Data", "We Currently Fixing This Issue", "warning");
                //console.log("Please check your internet connection.");
            }
    
            return Promise.reject(error)
        });
}

//POST DATA
function postData(apiPost, dataPost) {
    const requestOptions = {timeout: 10000, headers: authHeader() };
    return axios.post(apiPost, dataPost, requestOptions)
        .then(user =>{
            return user;
        })
        .catch(error => {
            if (!error.response) {
                swal("Terjadi Kesalahan", "We Currently Fixing This Issue", "warning");
                //console.log("Please check your internet connection.");
            }
    
            return Promise.reject(error)
        });
}
