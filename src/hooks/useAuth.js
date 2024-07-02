import { useState, useContext } from 'react';
import { signInAPI, signUpAPI } from '../services/api/auth_api'
import { useNavigate } from 'react-router-dom';
import { signInUnAuthenticate, signInError, signUpErrorForm } from '../services/constant/error_messages';
import { message } from "antd";
import { emptyFields, signUpError } from '../services/constant/error_messages';
import AuthContext from '../context/auth_context';

export const useAuth = ( Form ) => {
    const { signInContext } = useContext( AuthContext );
    const [ form ] = Form.useForm();
    const navigate = useNavigate();

    const [ signInComponents, setSignInComponents ] = useState({
        open:false, // to open the modal of sign in
        confirmLoading: false, // to start o stop the load the modal sign in
        loading:false, // to start o stop the load of the button in the modal sign in
        emailStatus:'',
        passwordStatus:''
    });

    const [ signUpComponents, setSignUpComponents ] = useState({
        loading: false,
        spinnign: false,
        imageUrl: null,
        usernameStatus: '',
        emailStatus: '',
        passwordStatus: '',
        confirmStatus: '',
        firstNameStatus: '',
        lastNameStatus: '',
        birthDayStatus: '',
        streetStatus: '',
        cityStatus: '',
        stateStatus: '',
        countryStatus: '',
        zipCodeStatus: ''
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
                        message.error( signInUnAuthenticate );
                        setSignInComponents({
                            ...signInComponents,
                            open:false,
                            emailStatus:'error',
                            passwordStatus:'error'
                        });
                    }
                } catch ( error ) {

                    message.error( signInError );

                } finally {
                    setSignInComponents({
                        ...signInComponents,
                        confirmLoading: false,
                        loading:false,
                    });
                }
            }, 1500);

        }).catch(( errorInfo ) => {
            message.error(emptyFields);
            
            setSignInComponents({
                ...signInComponents,
                loading:false,
            });
        });
    }

    const signUp = () => {
        form.validateFields().then( (values) => {
            setSignUpComponents({
                ...signUpComponents,
                spinnign:true,
            });

            setTimeout(async() => {
                try {
                    const data = {
                        ...values,
                        birth_day: values.birth_day.format('YYYY-MM-DDThh:mm:ss'),
                        image_profile: signUpComponents.imageUrl
                    };

                    const response = await signUpAPI( data );

                    if (response &&  response.success) {
                        signInContext(response.token);

                        message.success('Registration successful!');

                        navigate('/');
                    } else {

                        message.error(signUpErrorForm);

                        let fieldsError = [
                            ['username', ''],
                            ['email', ''],
                            ['password', ''],
                            ['first_name', ''],
                            ['last_name', ''],
                            ['birth_day', ''],
                            ['street', ''],
                            ['city', ''],
                            ['state', ''],
                            ['country', ''],
                            ['zip_code', ''],
                        ];

                        //send a error to the fields with problems
                        response.error.errors.forEach( element =>   {
                            
                            for (let index = 0; index < fieldsError.length; index++) {
                                if(element.path === fieldsError[index][0]){
                                    fieldsError[index][0] = 'error';
                                }
                            }

                        });

                        let indexSignUp = 0 ;
                        //Put the errors in the view with the setState of sign up
                        signUpComponents.forEach( element => {

                            if( indexSignUp === 3 ){
                                element = fieldsError[indexSignUp-3][1];
                            }

                            indexSignUp += 1;
                        });

                        setSignUpComponents({
                            ...signUpComponents,
                            // usernameStatus:     fieldsError[0][1],
                            // emailStatus:        fieldsError[1][1],
                            // passwordStatus:     fieldsError[2][1],
                            // confirmStatus:      fieldsError[3][1],
                            // firstNameStatus:    fieldsError[4][1],
                            // lastNameStatus:     fieldsError[5][1],
                            // birthDayStatus:     fieldsError[6][1],
                            // streetStatus:       fieldsError[7][1],
                            // cityStatus:         fieldsError[8][1],
                            // stateStatus:        fieldsError[9][1],
                            // countryStatus:      fieldsError[10][1],
                            // zipCodeStatus:      fieldsError[11][1]
                        });
                    }

                } catch (error) {

                    message.error( signUpError );
                    
                } finally {
                    setSignUpComponents({
                        ...signUpComponents,
                        spinnign: false,
                        loading:false,
                    });
                }

            }, 1500);

        }).catch(( errorInfo ) => {
            
            message.error( emptyFields );

            setSignUpComponents({
                ...signUpComponents,
                spinnign: false,
                loading:false,
            });

        });
    }

    return {
        signIn,
        signUp,
        signInComponents,
        setSignInComponents,
        signUpComponents,
        setSignUpComponents,
        form,
    };
}
