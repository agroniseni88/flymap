import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Card.Footer style={{ background: '#52627F', padding: "4px" }}>
                <Container>
                    <Row>
                        <Col style={{ color: '#fff' }}>
                            <small > © Hack Your Future 2020</small>
                        </Col>
                    </Row>
                </Container>
            </Card.Footer>
        </div>
    )
}

export default Footer;