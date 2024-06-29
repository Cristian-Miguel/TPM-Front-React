import { useState, useContext } from 'react';
import { signInAPI } from '../services/api/auth_api'
import { useNavigate } from 'react-router-dom';
import { signInUnAuthenticate, signInError } from '../services/constant/error_messages';
import { message } from "antd";
import { emptyFields } from '../services/constant/error_messages';
import AuthContext from '../context/auth_context';

export const useAuth = ( Form ) => {
    const { signInContext } = useContext( AuthContext );
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [signInComponents, setSignInComponents] = useState({
        open:false, // to open the modal of sign in
        confirmLoading: false, // to start o stop the load the modal sign in
        loading:false, // to start o stop the load of the button in the modal sign in
        emailStatus:'',
        passwordStatus:''
    });

    const signIn = () => {
        form.validateFields().then( (values) => {

            setTimeout(async( ) => {
                try {
                    const response = await signInAPI(values);
    
                    if (response &&  response.success) {
                       
                        signInContext(response.token);

                        setSignInComponents({
                            ...signInComponents,
                            open:false,
                            emailStatus:'success',
                            passwordStatus:'success'
                        });

                        message.success('Sign in successful!');

                        navigate('/');
                    } else {
                        message.error(signInUnAuthenticate);
                        setSignInComponents({
                            ...signInComponents,
                            open:false,
                            emailStatus:'error',
                            passwordStatus:'error'
                        });
                    }
                } catch (error) {
                    message.error(signInError);
                } finally {
                    setSignInComponents({
                        ...signInComponents,
                        confirmLoading: false,
                        loading:false,
                    });
                }
            }, 1500);

        }).catch((errorInfo) => {
            message.error(emptyFields);
            setSignInComponents({
                ...signInComponents,
                loading:false,
            });
        });
    }

    const signUp = () => {

    }

    return {
        signIn,
        signUp,
        signInComponents,
        setSignInComponents,
        form,
    };
}
