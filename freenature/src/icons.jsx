import React from 'react'
import { Card, Button } from 'react-bootstrap';
import Map from './map'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FaDog } from 'react-icons/fa';

class Question extends React.Component {
  render(

  ) {
    return (
      <div>
        <Card className="text-center">
          <Card.Header>FREENATURE</Card.Header>
          <Card.Body>
            <Map />

            {/* the button of dog  */}
            <Button
              onClick={() => alert("Clicked")}
              variant="primary"
            >
              <FaDog style={{ width: '80px', height: '80px', }} />
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}


export default Question;