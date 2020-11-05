import { BehaviorSubject } from 'rxjs';

//import config from 'config';
import { handleResponse } from '../helpers';
import { apiLogin, apiVerifyAuth } from '../components';
import axios from 'axios';

const currentLoginSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentLogin')));
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    loginPPDB,
    logout,
    currentLogin: currentLoginSubject.asObservable(),
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value },
    get currentLoginValue () { return currentLoginSubject.value },
    addLogin,
    addUser
};

async function login(username, password) {
    const requestOptions = {
        method: 'get',
        body: { username:username, password:password }
    };
    var dataPost = {
        username:username,
        password:password
    }
    const requestOptionsLogin = {timeout: 10000 };
    await axios.post(apiVerifyAuth, dataPost, requestOptionsLogin)
    // return fetch(`http://192.168.100.114:3000/api/auth/signin`, requestOptions)
        //.then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentLogin', JSON.stringify(user));
            currentLoginSubject.next(user);

            return user;
            // axios.get(apiVerifyAuth, { headers: { 'Authorization' : 'token=' + user.token}})
            // .then(auth => {
            //     localStorage.setItem('currentUser', JSON.stringify(auth));
            //     currentUserSubject.next(auth);
            //     return user;
            // })
            // .catch(error => {
            //     console.log(error)
            // })
        })
        .catch(err => {
            const error = 'Username atau Password Salah!';
            return Promise.reject(error);
        });
}

async function loginPPDB(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    
    return fetch(apiLogin, requestOptions)
    // return fetch(`http://192.168.100.114:3000/api/auth/signin`, requestOptions)
        .then(handleResponse)
        .then(ppdb => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentLogin', JSON.stringify(ppdb));
            currentLoginSubject.next(ppdb);

            axios.get(apiVerifyAuth, { headers: { 'Authorization' : 'token=' + ppdb.token}})
            .then(auth => {
                localStorage.setItem('currentUser', JSON.stringify(auth));
                currentUserSubject.next(auth);
            })
            .catch(error => {
                console.log(error)
            })
            
            return ppdb;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    currentUserSubject.next(null);
    currentLoginSubject.next(null);
}

function addLogin(data){
    currentLoginSubject.next(data);
}

function addUser(data){
    currentUserSubject.next(data);
}