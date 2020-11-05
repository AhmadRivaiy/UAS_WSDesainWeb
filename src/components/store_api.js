//const lokal                     = 'https://atikan.dev.elemen.my.id/manajemen';
const httpUrl                        = 'https://atikan.test.elemen.my.id/manajemen';
//const httpLogin                   = 'https://atikan.dev.elemen.my.id/sso';
const httpLogin                      = 'http://103.155.104.14:8000';
const httpVerify                     = 'http://103.155.104.14:3000';
const lokal                          = 'http://192.168.100.199:1999';

//Login
export const apiLogin                = httpLogin + '/auth';
export const apiVerifyAuth           = lokal + '/verifyAuth';
export const getUser                 = lokal + '/getUserLogin';
//export const apiVerifyAuth           = httpVerify + '/auth/verify';

//Home
export const apiGetContentHome       = lokal + '/api/v1/home/content/'