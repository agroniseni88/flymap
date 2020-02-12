import React, { Component } from "react";
import { Card, Row, Nav } from "react-bootstrap";
import Example from "../components/toolTips/Tooltips";
import ExampleWater from "../components/toolTips/ToolWater";
import ExampleFire from "../components/toolTips/ToolFire";

class FilterIcons extends Component {
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Nav.Link href="/water">
              <ExampleWater />
            </Nav.Link>
            <Nav.Link href="/toilets">
              <Example />
            </Nav.Link>
            <Nav.Link href="/fire">
              <ExampleFire />
            </Nav.Link>
           
          </Row>
        </Card>
      </div>
    );
  }
}
export default FilterIcons;
