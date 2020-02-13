import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Card.Footer style={{ background: '#52627F', padding: "4px" }}>
                <Container>
                    <Row>
                        <Col style={{ color: '#fff' }}>
                            <a href='https://hackyourfuture.be/'>  <small > © Hack Your Future 2020</small></a>
                        </Col>
                        <Col style={{ color: '#fff' }}>
                            <a href='http://www.bivakzone.be/bivaktochten.html'>  <small >  © Bivakzone</small></a>
                        </Col>
                    </Row>
                </Container>
            </Card.Footer>
        </div>
    )
}

export default Footer;