import React,{Component} from 'react';
import {
    Container, 
    Row, 
    Col, 
    Button,
    Image
} from 'react-bootstrap';
import logo2 from '../img/logo2.png';
import logo1 from '../img/logo1.png';
import '../css/Header.css';

class Header extends Component {
    render(){
        return (
            <div className ="big-container">
                <Container fluid>
                    <Row className ="big-row">
                        <Col></Col>
                        <Col xs={8}>
                            <Row>
                                <Image className = "logo2" src={logo2} fluid/>
                            </Row>
                            <p></p>
                            <Row>
                                <Image className = "logo1" src={logo1} fluid/>
                            </Row>
                            <Row>
                                <div className="header-p">这里帮您打造美丽，时尚，剪发艺术的作品</div>
                            </Row>
                            <Row>
                                <div className="header-p">专业的技术，热情的服务是我们的宗旨。您的改变，创新与魅力从这里开始</div>
                            </Row>
                        </Col>
                        <Col>
                            <div className="right-col">
                                <Row className="light-p">SERVICES</Row>
                                <Row>
                                    <a href="#services-anchor">服务内容</a>
                                </Row>
                                <br/>
                                <Row className="light-p">WORKS</Row>
                                <Row>
                                    <a href="#works-anchor">作品</a>
                                </Row>
                                <br/>
                                <Row className="light-p">CONNECT</Row>
                                <Row>
                                    <a href="#contacts-anchor">联系我们</a>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Header;