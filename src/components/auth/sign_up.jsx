import React from 'react';
import { PlusOutlined, LoadingOutlined  } from '@ant-design/icons';
import { DatePicker, Upload, Col, Row, Form, Input, message, Space, Button, Spin, Flex, InputNumber } from "antd";
import { useAuth } from '../../hooks/useAuth';
import '../../css/sign_up.css';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const SignUp = () => {
    // const [form] = Form.useForm();
    // const [loading, setLoading] = useState(false);
    // const [spinning, setSpinning] = React.useState(false);
    // const [imageUrl, setImageUrl] = useState();
    const { signUp, form, signUpComponents, setSignUpComponents } = useAuth( Form );

    const handlerSignUp = () => {
        signUp();
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            setSignUpComponents({
                ...signUpComponents,
                loading:false,
                imageUrl: null
            });
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            setSignUpComponents({
                ...signUpComponents,
                loading: false,
                imageUrl: null
            });
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = (info) => {

        if (info.file.status === 'uploading') {
            setSignUpComponents({
                ...signUpComponents,
                loading: false
            });
          return;
        }

        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (url) => {
            setSignUpComponents({
                ...signUpComponents,
                loading: false,
                imageUrl: url
            });;
          });
        }

    };

    //For local save, for the moment until develop the endpoint of save the image
    const handleCustomRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 1500);
    };

    const onReset = () => {
        form.resetFields();
    };
      
    const uploadButton = (
        <button
          style={{
            border: 0,
            background: 'none',
          }}
          type="button"
        >
          {signUpComponents.loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </button>
    );

    return(
        <div id="SignUpComponent">
            <Row justify={'center'} >
                <Col span={7} push={0}></Col>
                <Col span={10} push={0}>
                    <h1 style={{ textAlign:'center' }} >Sing up</h1>
                    <Form
                        name='signup'
                        layout="vertical"
                        autoComplete='off'
                        form={form}
                    >
                        <Form.Item 
                            label="User Image" 
                            valuePropName="oneImage" 
                        >
                            <Upload
                                name="image_profile"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action=""
                                beforeUpload={beforeUpload}
                                customRequest={handleCustomRequest}
                                onChange={handleChange}
                                
                            >
                                {signUpComponents.imageUrl ? (
                                <img
                                    src={ signUpComponents.imageUrl }
                                    alt="avatar"
                                    style={{
                                    width: '100%',
                                    }}
                                />
                                ) : (
                                uploadButton
                                )}
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                        
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type:'email',
                                    required: true,
                                    message: 'Please input your email!',
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
                            label="Confirm your password"
                            name="confirm"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                            style={{marginBottom: 0}}
                            >
                            <Input.Password />
                        </Form.Item>

                        <h2>Personal information</h2>
                        
                        <Form.Item
                            label="First name"
                            name="first_name"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Last name"
                            name="last_name"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your last name!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Birth date"
                            name="birth_day"
                            rules={[
                                {
                                    type:'date',
                                    required: true,
                                    message: 'Please input your full name!',
                                },
                            ]}
                            >
                            <DatePicker style={{ width:'100%' }} />
                        </Form.Item>

                        <Form.Item
                            label="Street address"
                            name="street"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your street address!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="City"
                            name="city"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your city!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="State"
                            name="state"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your state!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Country"
                            name="country"
                            rules={[
                                {
                                    type:'string',
                                    required: true,
                                    message: 'Please input your country!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Zip Code"
                            name="zip_code"
                            rules={[
                                {
                                    type:'integer',
                                    required: true,
                                    message: 'Please input your zip code!',
                                },
                            ]}
                        >
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item style={{ width:'100%', display:'flex', justifyContent:'right' }}>
                            <Space>
                                <Button htmlType="button" onClick={onReset}>
                                    Reset
                                </Button>

                                <Button type="primary" htmlType="submit" style={{ width:'300px' }} onClick={ handlerSignUp }>
                                    Submit
                                </Button>
                            </Space>
                        </Form.Item>

                    </Form>
                </Col>
                <Col span={7} push={0}></Col>
            </Row>
            
            <Flex gap="small">
                <Spin 
                    tip="Loading" 
                    spinning={ signUpComponents.spinning } 
                    fullscreen
                > 
                    <div 
                        style={{  
                            padding: 50,
                            background: 'rgba(0, 0, 0, 0.05)',
                            borderRadius: 4,
                        }} /> 
                </Spin>
            </Flex>
        </div>
    );
}

export default SignUp;