import React from 'react';
import Toilets from '../components/Toilets'
import { Col, Row, Card } from 'react-bootstrap';


function Wc() {
    return (
        <Card style={{ border: '5px yellow solid' }}>
            <Row>
                <Col><Toilets /></Col>
            </Row>
        </Card>
    );
}

export default Wc;