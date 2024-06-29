import Types from './types/types';

const AuthReducer = ( state = {}, action ) => {

    switch (action.type) {
        case Types.signin:
            return {
                ...state,
                logged: true,
                user: action.payload.token,
                token: action.payload.token
            };

        case Types.logout:
            return {
                logged: false
            };

        case Types.signup:
            return {
                logged: true,
                user: action.payload,
                token: action.payload.token
            };

        default:
            return state;
    }
}

export default AuthReducer;