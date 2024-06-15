import { useReducer } from 'react';
import { AuthContext } from "./auth_context";
import { AuthReducer } from "./auth_reducer";
import { Types } from './types/types';

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [ AuthState, dispatch ] = useReducer( AuthReducer, {}, init );

    const login = (userData) => {

        userData = {
            id: 'aaa-bbb-111', name: "nombre", rol: 2
        }

        const action = {
            type: Types.login,
            payload: userData
        }

        // setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(action);
    };

    const logout = () => {
        // setUser(null);

        const action = {
            type: Types.logout
        }

        localStorage.removeItem('user'); 
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...AuthState, 
            login, 
            logout 
        }}>
          {children}
        </AuthContext.Provider>
      );
}