import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FrontImage from '../assets/hermosa-playa-tropical.jpg';
import { Button, Space, Col, Row, Modal, Form, Input, Checkbox, message } from "antd";
import { signInUser } from '../services/api/sign_in';
import '../css/sign_in.css'

const SignIn = () => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setLoading(true);
        onSignIn();
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const onSignIn = () => {
        form.validateFields().then( (values) => {

            setTimeout(async( ) => {

                try {
                    const response = await signInUser(values);

                    message.success('Sign in successful!');

                    if (response && response.success) {
                        setOpen(false);
                        navigate('/');
                    } else {
                        message.error('Sign in failed. Please check your username and password.');
                    }
                } catch (error) {
                    message.error('An error occurred. Please try again.');
                } finally {
                    setLoading(false);
                    setConfirmLoading(false);
                }
                
            }, 1500);

        }).catch((errorInfo) => {
            message.error('Please fill in all required fields correctly.');
            setLoading(false);
        });
    };

    return(
        <>
            <div id="SignInComponent">
                <Row style={{ minHeight:'100vh' }}>
                    <Col span={8}>
                        <figure id = 'ImageContainer'>
                            <img src={FrontImage} alt='beach' id="ImageSignIn"/>
                        </figure>
                    </Col>
                    <Col span={12} push={2} pull={2}>

                        <Row justify={'center'} align={'bottom'} style={{ height:"20%" }}>
                            <Space direction='vertical' size={"large"}>
                                <h1>Discover Mich</h1>
                            </Space>
                        </Row>

                        <Row justify={'center'} align={"top"} style={{ height:"80%" }}>

                            <Space direction='vertical' size={20}>
                                <h2>Enjoy travel with us.</h2>

                                <Button type="primary" htmlType="button" style={{ width:400}}>
                                    Sign up with google
                                </Button>

                                <Button type="primary" htmlType="button" style={{ width:400 }}>
                                    Sign up with facebook
                                </Button>

                                <div className='line'>
                                    <hr/> 
                                    <label htmlFor="or">
                                        or
                                    </label>
                                    <hr/>
                                </div>

                                <Link to="/signup">
                                    <Button type="primary" htmlType="button" style={{ width:400 }}>
                                        Sign up
                                    </Button>
                                </Link>

                                <Button 
                                    type="primary" 
                                    htmlType="button" 
                                    onClick={showModal}
                                    style={{ width:400, marginTop:80 }}
                                >
                                    Sign in
                                </Button>

                                <Modal
                                    title="Email sign in"
                                    open={open}
                                    confirmLoading={confirmLoading}
                                    onCancel={handleCancel}
                                    footer={[
                                        <Button key="cancel" onClick={handleCancel}>
                                          Return
                                        </Button>,
                                    ]}
                                >
                                    <Form
                                        name='signin'
                                        layout="vertical"
                                        style={{ maxWidth: 600  }}
                                        autoComplete='off'
                                        form={form}
                                    >

                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    type:'email',
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                            >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[
                                                {
                                                    type:'string',
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                            style={{marginBottom: 0}}
                                            >
                                            <Input.Password />
                                        </Form.Item>

                                        <Form.Item
                                            name="ForgotPassword"
                                            valuePropName="link"
                                            style={{marginTop:0, marginBottom: 0}}
                                            >
                                            <Button type="link">Forgot password?</Button>
                                        </Form.Item>

                                        <Form.Item
                                            name="remember"
                                            valuePropName="checked"
                                            style={{marginTop:5, marginBottom: 5}}
                                            >
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>

                                        <Form.Item 
                                            style={{marginTop:0, marginBottom: 15}}
                                            wrapperCol={{
                                                offset: 14,
                                                span: 5
                                            }}> 
                                            <Button 
                                                key="submit" 
                                                type="primary" 
                                                loading={loading} 
                                                onClick={handleOk}
                                                style={{ width:200 }}
                                            >
                                                Sign in
                                            </Button>
                                        </Form.Item>

                                        <div className='line'>
                                            <hr/> 
                                            <label htmlFor="or">
                                                or
                                            </label>
                                            <hr/>
                                        </div>

                                        <Form.Item style={{ marginTop:15 }}>
                                            <Button type="primary" htmlType="submit" style={{ width:'100%' }}>
                                                Sign in Google
                                            </Button>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" style={{ width:'100%'}}>
                                                Sign in Facebook
                                            </Button>
                                        </Form.Item>

                                    </Form>
                                </Modal>

                            </Space>

                        </Row>
                    </Col>
                </Row>
            </div>                           
        </>
    );
}

export default SignIn;