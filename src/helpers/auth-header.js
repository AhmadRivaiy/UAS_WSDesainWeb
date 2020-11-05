import { authenticationService } from '../services';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue.data;
    if (currentUser && currentUser.token) {
        return { Authorization: 'token=' + currentUser.token };
    } else {
        return {};
    }
}