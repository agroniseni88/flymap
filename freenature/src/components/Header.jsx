import React from 'react';
import log2 from '../img/log2.png';
import {Card, Col, Container, Image, Row} from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Container  >
                <Card style={{ border: '2px #138086 solid', padding: '4px' }}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Image src={log2} thumbnail alt="name for website" style={{ padding: '5px', width: "500px" }} ></Image>
                        </Col>
                    </Row>
                    <Card.Body>
                        <Card.Title>
                            <h2>Primary Card Title</h2>
                        </Card.Title>
                        <Card.Text>
                            Wat is paalkamperen of bivakkeren? Kort verblijf en luxeloos, discreet overnachten  op een aangeduide plaats (gemarkeerd met een paal of pomp) in een natuurlijke omgevin
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
