import React from 'react';
import log2 from '../img/log2.png';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

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
                            <h2>Why are there no roads pointers to the Bivouaczone?</h2>
                        </Card.Title>
                        <Card.Text>

                            The Pole campgrounds are not intended to attract casual holidaymakers such as picnickers, let alone youngsters. They are peace and quiet places, aimed at cyclists, hikers, hikers, nature lovers or just peace seekers. That is why only coordinates are often specified and excessive signage is avoided. Sometimes discreet characters have been applied to guide you to it.
                            Take into account the fact that you may be approaching the bivouac zone from the wrong direction, often there is only one single road or path to it.
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
