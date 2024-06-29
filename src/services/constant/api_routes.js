
const URL_API = process.env.REACT_APP_ENVIRONMENT === 'DEVELOP' ?
    process.env.REACT_APP_API_ENDPOINT_URL_DEVELOP :
    process.env.REACT_APP_API_ENDPOINT_URL_PRODUCTION;

//authentication url
const URL_API_AUTH = `${URL_API}auth/`;
export const URL_API_SIGN_IN = `${URL_API_AUTH}sign_in`;
export const URL_API_SIGN_UP = `${URL_API_AUTH}sign_up`;
export const URL_API_SIGN_IN_GOOGLE = `${URL_API_AUTH}google_sign_in`;
export const URL_API_SIGN_UP_GOOGLE = `${URL_API_AUTH}google_sign_up`;

//products url