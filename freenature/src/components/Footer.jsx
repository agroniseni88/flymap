import React from 'react';
import nature from '../img/nature.png';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';


function Footer() {
    return (
        <div>
            <Card.Footer style={{ background: '#138086' }}>
                <Container>
                    <Row>
                        <Col style={{ color: '#fff' }}>

                            <Image src={nature} alt="nat" style={{ width: '50px', height: '50px' }} />
                            <small > © Hack Your Future 2019</small> </Col>
                        <Col >


                        </Col>
                    </Row>
                </Container>
            </Card.Footer>

        </div>
    )
}

export default Footer;