import React from 'react';
import name from '../image/name.png';
import { Card, Col, Image, Row, Nav, Navbar, Button } from 'react-bootstrap';
import FilterIcon from './FilterIcon';

export default function Header() {
    return (
        <div>
            <Card style={{ border: '3px #138086 solid', padding: '4px' }}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> <Button variant="outline-success"> <i className="fas fa-globe-europe fa-2x"> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                            <Nav.Link href="/water"> <Button variant="warning">   <i className="fas fa-dog fa-2x "> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                            <Nav.Link href="/gallery"> <Button variant="warning">   <i className="fab fa-envira fa-2x"> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                            <Nav.Link href="/404"> <Button variant="warning">   <i className="fas fa-star fa-2x"> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
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
                        </Card.Text>
                </Card.Body>
            </Card>
            <FilterIcon />
        </div>
    )
}