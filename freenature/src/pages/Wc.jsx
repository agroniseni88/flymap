import React from 'react';
import Media1 from '../components/Media1';
import Toilets from '../components/Toilets'
import { Col, Row, Card } from 'react-bootstrap';


function Wc() {
    return (
        <Card style={{ border: "3px #1c4327 solid", padding: '0px', margin: "0px" }}>
            <Row>

                <Col sm={8}><Toilets /></Col>
                <Col sm={4} style={{ direction: 'rtl', overflowY: 'auto', overflowX: ' hidden', backgroundColor: 'lightblue', height: '600px' }}>
                    <Media1 />

                </Col>

            </Row>
        </Card>


    );
}

export default Wc;