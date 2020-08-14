import React,{Component} from 'react';
import {
    Container, 
    Row, 
    Col, 
    Button,
    Image
} from 'react-bootstrap';
import logo5 from '../img/5.png';
import logo6 from '../img/6.png';
import qrcode from '../img/qr.jpg';
import '../css/contacts.css';

class Contacts extends Component {
    render(){
        return (
            <div>
                <Container fluid>
                    <Row >
                        <div id="contacts-anchor" className="title-contacts">CONTACT US <br></br> 联系我们</div>
                    </Row>
                    <hr className="linebreak"></hr>
                    <hr className="linebreak"></hr>
                </Container>
                <div className="background-contacts" >
                    <Container fluid>
                        <Row className="before-line"><br/></Row>
                        <Row>
                            <div class="line-contacts">---</div>
                        </Row>
                        <br></br>
                        <br></br>   
                        <br></br>
                        <Row className="rest-contacts" noGutters>
                            <Col></Col>
                            <Col xs={5}>
                                <Row noGutters>
                                    <Col xs={1}><Image className="icon" alt="One Hair Beauty Salon, One Hair Salon, Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={logo5}></Image></Col>
                                    <Col className="icon-text">Address/地址 - <a href="https://www.google.com/maps/place/%E5%8F%91%E5%BB%8A+One+Beauty+Hair+Salon/@40.7596707,-73.8304868,15z/data=!4m5!3m4!1s0x0:0xea63f8a22bfa55da!8m2!3d40.7596707!4d-73.8304868" target="_blank">39-20 Main St, 2FL, Flushing, NY 11354</a></Col>
                                </Row>
                                <br></br>
                                <Row noGutters>
                                    <Col xs={1}><Image className="icon" alt="One Hair Beauty Salon, One Hair Salon, Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={logo6}></Image></Col>
                                    <Col className="icon-text">Phone/电话 - (1) 929-231-5566</Col>
                                </Row>
                            </Col>
                            <Col xs={5}>
                                <Row className="QR">
                                    <img src={qrcode} alt="One Hair Beauty Salon, One Hair Salon, Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" className="qrcode"></img>
                                </Row>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br></br>
                    </Container>
                </div>
                <div className="contact-fix">111</div>
            </div>
        )
    }
}

export default Contacts;