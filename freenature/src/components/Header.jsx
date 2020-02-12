import React, { Component } from "react";
import freenature from "../image/freenature.png";
import { Col, Image, Row, Nav } from "react-bootstrap";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../components/en/language.json";
import LanguageToggle from "../components/en/LanguageToggle";
//import { Translate } from "react-localize-redux";


class Header extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: "EN", code: "en" },
        { name: "NL", code: "du" },
        { name: "FR", code: "fr" }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });

    this.props.addTranslation(globalTranslations);
  }

  render() {
    return (
      <div>
          <Row>

            <Col md={{ span: 6, offset: 3 }}>
              <Nav.Link href="/">
                <Image
                  src={freenature}
                  alt="name for website"
                  style={{ marginLeft: '100px', padding: "0px", width: "400px" }}
                ></Image>
              </Nav.Link>
            </Col>
            <Col>
            <LanguageToggle />
            </Col>
          </Row>
         {/*   <Navbar bg="light" expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <p>
              <Translate id="menu.title">
                Depending on the owner of the site on which a bivouac zone is
                located, there may be some limitations.
            </Translate>
    </p>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
             
            </Navbar.Collapse>
          </Navbar>
              */}
        
      </div>
    );
  }
}

export default withLocalize(Header);
