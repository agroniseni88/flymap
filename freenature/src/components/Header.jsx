import React, { Component } from 'react'
import freenature from '../image/freenature.png';
import { Card, Col, Image, Row, Nav, Navbar, Button } from 'react-bootstrap';
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
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Image src={freenature} alt="name for website" style={{ padding: '5px', width: "500px" }} ></Image>
                        </Col>
                    </Row>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> <Button variant="warning"> <i className="fas fa-globe-europe fa-2x"> </i></Button></Nav.Link>
                                <Nav.Link href="/water"> <Button variant="warning">   <i className="fas fa-dog fa-2x "> </i></Button></Nav.Link>
                                <Nav.Link href="/gallery"> <Button variant="warning">  Gallery </Button></Nav.Link>


                            </Nav>
                            <LanguageToggle />
                        </Navbar.Collapse>

                    </Navbar>

                    <Navbar.Brand href="/">
                        <Translate id="menu.title">Depending on the owner of the site on which a bivouac zone is located, there may be some limitations.</Translate>
                    </Navbar.Brand>
                </Card>


            </div >


        )
    }
}


export default withLocalize(Header);
