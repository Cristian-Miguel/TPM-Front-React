import axios from 'axios';
import { hashPassword } from '../hash';
import { URL_API_SIGN_IN, URL_API_SIGN_UP } from '../constant/api_routes';

export const signInAPI = async (data) => {
    try {
        const hashedPassword = hashPassword(data.password);

        const payload = {
            email: data.email,
            password: hashedPassword.toString().substring(2, 52),
        };

        const response = await axios.post(URL_API_SIGN_IN, payload);
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const signUpUser = async (data) => {
    try {
        const hashedPassword = await hashPassword(data.password);

        const payload = {
            ...data,
            password: hashedPassword,
        };

        const response = await axios.post(URL_API_SIGN_UP, payload);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};