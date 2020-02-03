import React from 'react';
import name from '../img/name.png';
import { Card, Col, Image, Row, Nav, Navbar, Button } from 'react-bootstrap';




export default function Header() {
    return (
        <div>
<<<<<<< HEAD
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
=======

            <Card style={{ border: '3px #138086 solid', padding: '4px' }}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> <Button variant="outline-success"> <i class="fas fa-globe-europe"> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                            <Nav.Link href="/water"> <Button variant="warning">   <i className="fas fa-dog "> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                            <Nav.Link href="/404"> <Button variant="warning">   <i className="fas fa-star "> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                            <Nav.Link href="/404"> <Button variant="warning">   <i className="fas fa-star "> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                            <Nav.Link href="/404"> <Button variant="warning">   <i class="fas fa-tint-slash"><i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Image src={name} thumbnail alt="name for website" style={{ padding: '5px', width: "500px" }} ></Image>
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Title>
                        <h4>Why are there no roads pointers to the Bivouaczone?</h4>
                    </Card.Title>
                    <Card.Text>
                        The Pole campgrounds are not intended to attract casual holidaymakers such as picnickers, let alone youngsters. They are peace and quiet places, aimed at cyclists, hikers, hikers, nature lovers or just peace seekers.
>>>>>>> 95f50618d1418123f5dcfecb1037317bea555de6
                        </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}
