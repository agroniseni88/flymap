import React, { Component } from "react";
import { Row, Nav } from "react-bootstrap";
import Example from "../components/toolTips/Tooltips";
import ExampleWater from "../components/toolTips/ToolWater";
import ExampleFire from "../components/toolTips/ToolFire";
import DogT from '../components/toolTips/DogT';

class FilterIcons extends Component {
  render() {
    return (
      <div>
        
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
            <Nav.Link href="/dog">
              <DogT />
            </Nav.Link>
           
          </Row>
      </div>
    );
  }
}
export default FilterIcons;
