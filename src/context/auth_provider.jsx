import { useReducer } from 'react';
import AuthContext from "./auth_context";
import AuthReducer from "./auth_reducer";
import Types from './types/types';
import { decodeJWTInfo } from '../services/jwt';

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user: user
    }
}

const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( AuthReducer, {}, init );

    const signInContext = ( token ) => {

        const tokenData = decodeJWTInfo( token );

        const userData = {
            uuid: tokenData.uuid,
            email: tokenData.email,
            username: tokenData.username,
            image_profile: tokenData.image_profile,
            id_rol: tokenData.id_rol
        }

        const action = {
            type: Types.signin,
            payload: userData
        }

        sessionStorage.setItem('token', JSON.stringify(token))
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(action);
    };

    const logOutContext = () => {

        const action = {
            type: Types.logout
        }

        sessionStorage.removeItem('token');
        localStorage.removeItem('user'); 
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...state, 
            signInContext, 
            logOutContext 
        }}>
          {children}
        </AuthContext.Provider>
      );
}

export default AuthProvider;