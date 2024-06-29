import React from 'react';
import { Col, Row, Layout, Card, Flex, message } from "antd";
import PromosImage from '../assets/daniela-cuevas-t7YycgAoVSw-unsplash.jpg';
import CardImage from '../assets/pexels-eberhardgross-1062249.jpg';
import MainHeader from '../components/layout/header';
import MainFooter from '../components/layout/footer';
import '../css/home.css';

const Home = () => {

    const handlerClick = () => {
        message.info("click on me");
    }

    return(
        <>
            <div id='HomeComponent'>
                <Layout>
                    <MainHeader/>
                    
                    <Layout.Content style={{ minHeight: 1000, width:'100%' }}>
                        
                        <Row justify={'center'} align={'middle'} style={{ marginTop:40 }}>
                            <Col span={2}></Col>
                            <Col span={20}>
                                <figure id = 'PromosImageContainer'>
                                    <div className="overlay"></div>
                                    <h1 style={{ textAlign:'center' }} >Discover Mich</h1>
                                    <p style={{ textAlign:'center' }} >Discover your best adventure</p>
                                    <img src={PromosImage} alt="Main title" id='PromosContainer' />
                                </figure>
                            </Col>
                            <Col span={2}></Col>
                        </Row>

                        <Row justify={'center'} style={{ marginTop:20 }}>
                            <Col span={2}></Col>
                            <Col span={20}>
                                <h3 style={{ textAlign:'center' }} >Better range</h3>
                            </Col>
                            <Col span={2}></Col>
                        </Row>

                        <Row justify={'center'} style={{ marginTop:20 }}>
                            <Col span={2}></Col>

                            <Col span={5}>
                                <Flex justify='center'>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src={CardImage} />}
                                        onClick={handlerClick}
                                    >
                                        <p>card 1</p>
                                    </Card>
                                </Flex>
                            </Col>

                            <Col span={5}>
                                <Flex justify='center'>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src={CardImage} />}
                                        onClick={handlerClick}
                                    >
                                        <p>card 1</p>
                                    </Card>
                                </Flex>
                            </Col>

                            <Col span={5}>
                                <Flex justify='center'>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src={CardImage} />}
                                        onClick={handlerClick}
                                    >
                                        <p>card 1</p>
                                    </Card>
                                </Flex>
                            </Col>

                            <Col span={5}>
                                <Flex justify='center'>
                                    <Card
                                        hoverable
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img alt="example" src={CardImage} />}
                                        onClick={handlerClick}
                                    >
                                        <p>card 1</p>
                                    </Card>
                                </Flex>
                            </Col>

                            <Col span={2}></Col>
                        </Row>
                    </Layout.Content>

                    <MainFooter/>
                </Layout>
            </div>

        </>
    );
}

export default Home;