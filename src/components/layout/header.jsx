import React, { useState, useEffect, useContext } from 'react';
import {  
    UserOutlined, DownOutlined, SettingOutlined, 
    QuestionCircleOutlined, MenuOutlined, FormOutlined,
    HomeOutlined, SearchOutlined, TagsOutlined
} from '@ant-design/icons';
import { LogoutOutlined, LoginOutlined, Favorite, ManageAccounts } from '@mui/icons-material';
import { Layout, Avatar, Row, Col, Dropdown, Button, message, Flex, Drawer, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth_context';
import { secondColor, firstColor100 } from '../common/colors';

const MainHeader = () => {
    const [open, setOpen] = useState(false);
    const [ items, setItemsProfile ] = useState([]);
    const [ pages, setPage ] = useState([]);
    const navigate = useNavigate();
    const { logged } = useContext( AuthContext );

    useEffect(() => {
        if(logged){
            setItemsProfile([
                {
                    label: 'Profile',
                    key: '1',
                    icon: <UserOutlined />,
                  },
                  {
                    label: 'Setting',
                    key: '2',
                    icon: <SettingOutlined />,
                  },
                  {
                    label: 'Help',
                    key: '3',
                    icon: <QuestionCircleOutlined />,
                  },
                  {
                    label: 'Logout',
                    key: '4',
                    icon: <LogoutOutlined />,
                  },
            ]);
            setPage([
                {
                    key:'HomePage',
                    label:'Home',
                    icon: <HomeOutlined />,
                },
                {
                    key:'Search',
                    label:'Search Products',
                    icon: <SearchOutlined />,
                },
                {
                    key:'ReservationId',
                    label:'Reservation',
                    icon: <TagsOutlined />,
                },
                {
                    key:'Favorites',
                    label:'Sign in',
                    icon: <Favorite />,
                },
                {
                    key:'Account',
                    label:'Account',
                    icon: <ManageAccounts />,
                },
                {
                    key:'Message',
                    label:'Message',
                    icon: <ManageAccounts />,
                },
                {
                    key:'Logout',
                    label:'Logout',
                    icon: <LogoutOutlined />,
                },
            ]);
        } else {
            setItemsProfile([
                {
                    label: 'Sign in',
                    key: '1',
                    icon: <LoginOutlined />,
                  },
                  {
                    label: 'Sign up',
                    key: '2',
                    icon: <FormOutlined />
                  },
            ]);
            setPage([
                {
                    key:'HomePage',
                    label:'Home',
                    icon: <HomeOutlined />,
                },
                {
                    key:'Search',
                    label:'Search Products',
                    icon: <SearchOutlined />,
                },
                {
                    key:'Reservation',
                    label:'Reservation',
                    icon: <TagsOutlined />,
                },
                {
                    key:'SignIn',
                    label:'Sign in',
                    icon: <LoginOutlined />,
                },
                {
                    key:'SignUp',
                    label:'Sign up',
                    icon: <FormOutlined />,
                },
            ]);
        }
    }, [logged]);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleMenuClick = (e) => {
        message.info('Click on menu item');
        console.log('click', e);
        if(items.length === 2){
            switch(e.key){
                case '1':
                    navigate('/signin');
                    break;
                case '2':
                    navigate('/signup');
                    break;
                default:
                    break;
            }
        } else {
            switch(e.key){
                case '1':
                    navigate('/profile');
                    break;
                case '2':
                    navigate('/setting');
                    break;
                case '3':
                    navigate('/help');
                    break;
                case '4':
                    navigate('/home');
                    break;
                default:
                    break;
            }
        }
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const onChoosePage = (e) => {
        switch(e.key){
            case 'HomePage':
                navigate('/');
                break;
            case 'Search':
                navigate('/products');
                break;
            case 'Reservation':
                navigate('/reservation');
                break;
            case 'ReservationId':
                let user = localStorage.setItem('user');
                navigate('/reservation'+user.id);
                break;
            case 'SignIn':
                navigate('/signin');
                break;
            case 'SignUp':
                navigate('/signup');
                break;
            case 'Favorites':
                navigate('/favorite');
                break;
            case 'Account':
                navigate('/account_setting');
                break;
            case 'Message':
                navigate('/message');
                break;
            default:
                break;
        }
    };

    return(
        <>
            <Layout.Header style={{ backgroundColor:secondColor, width:'100%' }}>
                <Row align={'middle'} justify={'center'} style={{ height:'100%' }}>
                    
                    <Col span={4} push={1}>
                        <Flex justify='left'>
                            <Button style={{ backgroundColor:secondColor }} onClick={showDrawer}>
                                <MenuOutlined/>
                            </Button>
                        </Flex>
                    </Col>
                    
                    <Col span={14}></Col>

                    <Col span={4} pull={1}>
                        <Flex justify='right'>
                            <Dropdown menu={menuProps}>
                                <Button 
                                    style={{ 
                                        backgroundColor:secondColor, 
                                        borderColor:secondColor,
                                        width:54, 
                                        height:32, 
                                        margin:0, 
                                        padding: 0,
                                    }}
                                    >
                                    <Avatar shape="square" size={32} icon={<UserOutlined />} />
                                    <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Flex>
                    </Col>
                </Row>
            
            </Layout.Header>

            <Drawer
                title="Menu"
                placement='left'
                closable={false}
                onClose={onClose}
                open={open}
                key='menuDrawer'
                style={{ backgroundColor:firstColor100 }}
            >
                <Menu
                    onClick={onChoosePage}
                    mode="inline"
                    items={pages}
                    style={{ backgroundColor:firstColor100 }}
                />
            </Drawer>
        </>
    );
}

export default MainHeader;