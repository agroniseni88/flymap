import React from "react";
import ExampleGalery from "../components/toolTips/ToolGalery";
import FilterIcons from "./FilterIcons";
import { Col, Row, Nav } from 'react-bootstrap';


function MapGalery() {
  return (
    <div>
      <Row>
        <Col xs="8">
          <Nav.Link href="/gallery">
            <ExampleGalery />
          </Nav.Link>
        </Col>
        <Col xs="4">
          <FilterIcons style={{ float: "right" }} />
        </Col>
      </Row>
    </div>
  );
}

export default MapGalery;
