import { Types } from './types/types';

export const AuthReducer = ( state = {}, action ) => {

    switch (action.type) {
        case Types.signin:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case Types.logout:
            return {
                logged: false
            };

        case Types.signup:
            return {
                logged: true,
                user: action.payload
            };

        default:
            return state;
    }
}