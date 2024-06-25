import axios from 'axios';
import { hashPassword } from '../hash';

const API_URL = 'http://localhost:3000/api/auth';

export const signInUser = async (data) => {
    try {
        const hashedPassword = await hashPassword(data.password);

        const payload = {
            ...data,
            password: hashedPassword,
        };

        const response = await axios.post(`${API_URL}/sign_in`, payload);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};