import React from 'react';
import { Col, Row, Layout } from "antd";
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
                        <h1>Home</h1>

                        <p>Hello world</p>

                        <Row justify={'center'} align={'middle'}>
                            <Col span={2}>2</Col>
                            <Col span={20}>20</Col>
                            <Col span={2}>2</Col>
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