import React from 'react';
import { Col, Row, Layout, Flex} from "antd";
import PromosImage from '../assets/daniela-cuevas-t7YycgAoVSw-unsplash.jpg';
import MainHeader from '../components/layout/header';
import MainFooter from '../components/layout/footer';
import '../css/home.css';

const Home = () => {
    return(
        <>
            <div id='HomeComponent'>
                <Layout>
                    <MainHeader/>
                    
                    <Layout.Content style={{ minHeight: 1500, width:'100%' }}>
                        <Flex justify='center'>
                            <h1>Home</h1>
                            <p>Discover your best adventure</p>
                        </Flex>

                        <Row justify={'center'} align={'middle'}>
                            <Col span={2}></Col>
                            <Col span={20}>
                                <figure id = 'PromosImageContainer'>
                                    <img src={PromosImage} alt="promotion image" id='PromosContainer' />
                                </figure>
                            </Col>
                            <Col span={2}></Col>
                        </Row>

                        <Row>
                            <Col span={2}>2</Col>
                            <Col span={10}>10</Col>
                            <Col span={10}>10</Col>
                            <Col span={2}>2</Col>
                        </Row>

                        <Row>
                            <Col span={2}>2</Col>
                            <Col span={20}>20</Col>
                            <Col span={2}>2</Col>
                        </Row>
                    </Layout.Content>

                    <MainFooter/>
                </Layout>
            </div>

        </>
    );
}

export default Home;