import React from 'react';
import Media1 from '../components/Media1';
import DrinkingWater from '../components/DrinkingWater'
import { Col, Row, Card } from 'react-bootstrap';


function Water() {
    return (
        <Card style={{ border: "3px #138086 solid", padding: '0px', margin: "0px" }}>
            <Row>

                <Col sm={8}><DrinkingWater /></Col>
                <Col sm={4} style={{ direction: 'rtl', overflowY: 'auto', overflowX: ' hidden', backgroundColor: 'lightblue', height: '600px' }}>
                    <Media1 />

                </Col>

            </Row>
        </Card>

    );
}

export default Water;