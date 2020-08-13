import React,{Component} from 'react';
import {
    Container, 
    Row, 
    Col, 
    Button,
    Image
} from 'react-bootstrap';
import logo1 from '../img/logo1.png';
import '../css/Menu.css';

class Menu extends Component {
    render(){
        return (
            <div className="big-menu">
                <Container fluid>
                    <Container fluid>
                        <Row>
                            <Col sm={5} xs={4}>
                                <Image src = {logo1} className = "logo1-menu"/>
                            </Col>
                            <Col className="menu-options">
                                <Row >SERVICES</Row>
                                <Row>
                                    <a href="#services-anchor">服务内容</a>
                                </Row>
                            </Col>
                            <Col className="menu-options">
                                <Row>WORKS</Row>
                                <Row>
                                    <a href="#works-anchor">作品</a>
                                </Row>
                            </Col>
                            <Col className="menu-options">
                                <Row>CONTACT</Row>
                                <Row>
                                    <a href="#contacts-anchor">联系我们</a>
                                </Row>
                            </Col>
                            <Col className="menu-options">
                                <Row>APPOINTMENT</Row>
                                <Row>
                                    <a href="https://www.yelp.com/biz/one-beauty-hair-salon-flushing-3" target="_blank">预约服务</a>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Row>
                        <div class="line">---</div>
                    </Row>
                    <Row className="after-line"><br/></Row>
                </Container>
            </div>
        )
    }
}

export default Menu;