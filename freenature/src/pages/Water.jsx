import React from 'react';
import DrinkingWater from '../components/DrinkingWater'
import { Col, Row, Card } from 'react-bootstrap';


function Water() {
    return (
        <Card style={{ border: '5px #52627F solid' }}>
            <Row>
                <Col><DrinkingWater /></Col>
            </Row>
        </Card>
    );
}

export default Water;