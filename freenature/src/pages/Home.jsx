import React from "react";
import Media1 from "../components/Media1";
import MapBe from "../components/MapBe";
import { Col, Row, Card } from "react-bootstrap";
import MapGalery from "../components/MapGalery";

function Home() {
  return (
    <Card style={{ padding: "0px", margin: "0px", border: "none" }}>
      <div>
        <MapGalery />
      </div>
      <Row>
        <Col
          className="media1"
          sm={4}
          style={{
            fontSize: "16px",
            color: "#044A18",
            overflowY: "scroll",
            overflowX: " hidden",
            backgroundColor: "#F5F5F5",
            height: "600px"
          }}
        >
          <Media1 />
        </Col>
        <Col sm={8}>
          <MapBe />
        </Col>
      </Row>
    </Card>
  );
}

export default Home;
