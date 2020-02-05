import React, { Component } from 'react'
import name from '../image/name.png';
import { Card, Col, Image, Row, Nav, Navbar, Button } from 'react-bootstrap';
import FilterIcon from './FilterIcon';

import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from '../components/en/language.json'
import LanguageToggle from '../components/en/LanguageToggle';
import { Translate } from "react-localize-redux";


class Header extends Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Dutch", code: "du" },
                { name: "French", code: "fr" }
            ],
            translation: globalTranslations,
            options: { renderToStaticMarkup }
        });

        this.props.addTranslation(globalTranslations)
    }

    render() {
        return (


            <div>
                <Card style={{ border: '3px #138086 solid', padding: '4px' }}>
                    <Navbar bg="light" expand="lg">

                        <Navbar.Brand href="/">
                            <Translate id="menu.title">Depending on the owner of the site on which a bivouac zone is located, there may be some limitations.</Translate>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> <Button variant="warning"> <i className="fas fa-globe-europe fa-2x"> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                                <Nav.Link href="/water"> <Button variant="warning">   <i className="fas fa-dog fa-2x "> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                                <Nav.Link href="/gallery"> <Button variant="warning">   <i className="fab fa-envira fa-2x"> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                                <Nav.Link href="/404"> <Button variant="warning">   <i className="fas fa-star fa-2x"> <i className="fas fa-map-marked-alt"></i></i></Button></Nav.Link>
                                <LanguageToggle />
                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Image id="name_image" src={name} thumbnail alt="name for website" style={{ padding: '5px', width: "500px" }} ></Image>
                        </Col>
                    </Row>

                </Card>
                <FilterIcon />

            </div>


        )
    }
}


export default withLocalize(Header);
