import React, { Component } from "react";
import freenature from "../image/freenature.png";
import { Card, Col, Image, Row, Nav, Navbar, Button } from "react-bootstrap";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../components/en/language.json";
import LanguageToggle from "../components/en/LanguageToggle";
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

    this.props.addTranslation(globalTranslations);
  }

  render() {
    return (
      <div>
        <Card style={{ border: "3px #138086 solid", padding: "4px" }}>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Nav.Link href="/">
                <Image
                  src={freenature}
                  alt="name for website"
                  style={{ padding: "5px", width: "500px" }}
                ></Image>
              </Nav.Link>
            </Col>
          </Row>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav.Link href="/gallery">
                Gallery
              </Nav.Link>
              <LanguageToggle />
            </Navbar.Collapse>
          </Navbar>
          <Navbar.Brand href="/">
            <Translate id="menu.title">
              Depending on the owner of the site on which a bivouac zone is
              located, there may be some limitations.
            </Translate>
          </Navbar.Brand>
          <Row>
            <Nav.Link href="/water">
              <Button variant="warning">
                <i className="fas fa-glass-whiskey fa-2x "> </i>
              </Button>
            </Nav.Link>
            <Nav.Link href="/toilets">
              <Button variant="warning" id='toilet'>
                <i className="fas fa-toilet fa-2x "> </i>
              </Button>
            </Nav.Link>
            <Nav.Link href="/fire">
              <Button variant="warning">
                <i className="fas fa-fire fa-2x "> </i>
              </Button>
            </Nav.Link>
          </Row>
        </Card>
      </div>
    );
  }
}

export default withLocalize(Header);
