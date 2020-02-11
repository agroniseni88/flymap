import React from 'react';
import Media1 from '../components/Media1';
import DrinkingWater from '../components/DrinkingWater'
import { Col, Row } from 'react-bootstrap';


function Water() {
    return (
        <Row>
            <Col xs={12} md={8}><DrinkingWater /></Col>

            <Col sm={4} style={{ overflowY: ' scroll', backgroundColor: 'lightblue', height: '600px' }}>
                <Media1 />

            </Col>
        </Row>
    );
}

export default Water;