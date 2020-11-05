import { authenticationService } from '../services';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403, 404].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                //window.location.reload(true);
            }

            if([422].indexOf(response.status) !== -1){
                const error = 'Username atau Password Salah!';
                return Promise.reject(error);
            }else{
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        }
        return data;
    });
}