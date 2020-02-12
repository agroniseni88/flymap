import React from "react";
import { Card, Button } from "react-bootstrap";
import Main from "../components/gallery/Main";

function Gallery() {
  return (
    <div>
     
      <Card style={{ background: "#fff" }} className="photoGrid">
      <Button variant="link" href='/' style={{border:'none', marginLeft:'20px'}}>Back</Button>
        <Card.Body>
          <Main />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Gallery;
