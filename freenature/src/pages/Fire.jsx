import React from "react";
import Media1 from "../components/Media1";
import OpenFire from "../components/OpenFire";
import { Col, Row, Card } from "react-bootstrap";
import MapGalery from '../components/MapGalery';

function Fire() {
  return (
    <Card
      style={{ padding: "0px", margin: "0px" }}
    >
      <div>
        <MapGalery />
      </div>
      <Row>
        <Col
          className="media1"
          sm={4}
          style={{
            fontSize: "16px",
            color: "#354418",
            overflowY: "auto",
            overflowX: " hidden",
            backgroundColor: "#F5F5F5",
            height: "600px"
          }}
        >
          <Media1 />
        </Col>
        <Col sm={8}>
          <OpenFire />
        </Col>
      </Row>
    </Card>
  );
}

export default Fire;
