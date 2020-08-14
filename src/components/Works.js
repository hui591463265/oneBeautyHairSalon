import React,{Component} from 'react';
import {
    Container, 
    Row, 
    Col, 
    Button,
    Image
} from 'react-bootstrap';
import gal1 from '../gallery/gal1.jpg';
import gal2 from '../gallery/gal2.jpg';
import gal3 from '../gallery/gal3.jpg';
import gal4 from '../gallery/gal4.jpg';
import gal5 from '../gallery/gal5.jpg';
import gal6 from '../gallery/gal6.jpg';
import '../css/Works.css';

class Works extends Component {
    render(){
        return (
            <div className="background-works">
                <Container fluid id="works-anchor">
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={9}>
                            <Row noGutters>
                                <Col xs={5}>
                                    <Row noGutters>
                                        <img className='gal3' alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={gal3}/>  
                                    </Row>
                                </Col>
                                <Col xs={5}>
                                    <Row noGutters>
                                        <img className='gal1' alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={gal1}/>
                                    </Row>
                                    <Row noGutters>
                                        <Col>
                                            <img className='gal4' alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={gal4}/>
                                        </Col>
                                        <Col>
                                            <img className='gal2' alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={gal2}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row noGutters>
                                        <Col xs={4}>
                                            <img className='gal5' alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={gal5}/>
                                        </Col>
                                        <Col xs={4}>
                                            <img className='gal6' alt="Hair, Salon, haircut, hairstyle, hair treatment, hair coloring 染发, 理发, 剪发, 美发, 直发, 烫发, 卷发, 护理" src={gal6}/>
                                        </Col>
                                    </Row>
                        </Col>
                        <Col xs={1} className='title-works'> WORKS<br></br>作品 </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Works;