import React,{Component} from 'react';
import {
    Container, 
    Row, 
    Col, 
    Button,
    Image
} from 'react-bootstrap';
import logo1 from '../img/1.png';
import logo2 from '../img/2.png';
import logo3 from '../img/3.png';
import logo4 from '../img/4.png';
import '../css/Services.css';

class Services extends Component {
    render(){
        return (
            <div className="background">
                <Container fluid>
                    <div className="break"><br></br><br></br></div>
                    <Row className="rest">
                        <Col xs={1}>
                            <Row>
                                <Col className="title-1">SERVICES <br/> 服务内容</Col>
                                <Col></Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row fluid>
                                <Col className="logo" xs={2}>
                                    <Image src = {logo1} alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" fluid/>
                                </Col>
                                <Col>
                                    <Row id="services-anchor" className="sub-title">
                                    HAIRSTYLES
                                    <br></br>
                                    剪发
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col className="title-p">MEN & WOMEN HAIRCUTS<br></br>男女剪发</Col>
                                        <Col className="title-p">HAIR BLOWOUT STRAIGHT/CURL<br></br>吹直发与卷发</Col>
                                        <Col className="title-p">UPDO<br></br>盘发</Col>
                                        <Col></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <br></br>
                            <Row fluid>
                                <Col className="logo" xs={2}>
                                    <Image src = {logo2} alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" fluid/>
                                </Col>
                                <Col>
                                    <Row className="sub-title">
                                    HAIR PERMS &AMP STRAIGHTENING
                                    <br></br>
                                    烫发与直发
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col className="title-p">DIGITAL PERM<br></br>数码烫发</Col>
                                        <Col className="title-p">COLD WAVE<br></br>冷烫</Col>
                                        <Col className="title-p">FOIL PERM<br></br>纸烫</Col>
                                        <Col className="title-p">VEIN PERM<br></br>级理烫</Col>
                                    </Row>
                                    <Row>
                                        <Col className="title-p">JAPANESE STRAIGHTENING<br></br>日式直发</Col>
                                    </Row>
                                </Col>
                            </Row>
                            <br></br>
                            <Row fluid>
                                <Col className="logo" xs={2}>
                                    <Image src = {logo3} alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" fluid/>
                                </Col>
                                <Col>
                                    <Row className="sub-title">
                                    HAIR TREATMENT
                                    <br></br>
                                    护理
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col className="title-p">KERATIN TREATMENT<br></br>巴西护理</Col>
                                        <Col className="title-p">JAPANESE WATER SPA DEEP CONDITIONING TREATMENT<br></br>日式水疗深度护理</Col>
                                        <Col></Col>
                                        <Col></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <br></br>
                            <Row fluid>
                                <Col className="logo" xs={2}>
                                    <Image src = {logo4} alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" fluid/>
                                </Col>
                                <Col>
                                    <Row className="sub-title">
                                    HAIR COLORING
                                    <br></br>
                                    染发
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col className="title-p">ROOT COLORING<br></br>发根染发</Col>
                                        <Col className="title-p">HIGHLIGHTING<br></br>挑染</Col>
                                        <Col className="title-p">SINGLE PROCESS<br></br>单染</Col>
                                        <Col className="title-p">BALAYAGE<br></br>渐变染</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Services;