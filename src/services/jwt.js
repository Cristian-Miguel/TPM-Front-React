import { jwtDecode } from "jwt-decode";

 export const decodeJWTInfo = ( token ) => {
    const userData = jwtDecode(token);

    return userData;
}
