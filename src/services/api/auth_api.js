import axios from 'axios';
import { hashPassword } from '../hash';
import { URL_API_SIGN_IN, URL_API_SIGN_UP } from '../constant/api_routes';

export const signInUser = async (data) => {
    try {
        const hashedPassword = hashPassword(data.password);

        let passwordString = hashPassword.toString();

        //hashPassword.toString().substring(2,52)

        console.log('password' + passwordString);

        const payload = {
            email: data.email,
            password: hashedPassword,
        };

        const response = await axios.post(URL_API_SIGN_IN, payload);

        return response.data;
    } catch (error) {

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