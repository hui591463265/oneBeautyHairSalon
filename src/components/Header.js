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
import MetaTags from 'react-meta-tags';

class Header extends Component {
    render(){
        return (
            <div class="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta id="meta-description" name="description" content="One Hair Beauty Salon 帮您打造美丽，时尚，剪发艺术的作品 专业的技术，热情的服务是我们的宗旨。您的改变，创新与魅力从这里开始" />
            <meta id="meta-keywords" name="keywords" content="Flushing, New York, Barber, QuickCut, Quick cut, One Hair Beauty Salon, One Hair Salon, Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理"/>
          </MetaTags>
            <div className ="big-container">
                <Container fluid>
                    <Row className ="big-row">
                        <Col></Col>
                        <Col xs={8}>
                            <Row>
                                <Image className = "logo2" alt="One Hair Beauty Salon, One Hair Salon, Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={logo2} fluid/>
                            </Row>
                            <p></p>
                            <Row>
                                <Image className = "logo1" alt="One Hair Beauty Salon, One Hair Salon, Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={logo1} fluid/>
                            </Row>
                            <Row>
                                <div className="header-p">这里帮您打造美丽，时尚，剪发艺术的作品</div>
                                <div className="header-p">专业的技术，热情的服务是我们的宗旨。您的改变，创新与魅力从这里开始</div>
                            </Row>
                            <br></br>
                            <br></br>
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
            </div>
        )
    }
}

export default Header;