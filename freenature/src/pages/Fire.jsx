import React from 'react';
import OpenFire from '../components/OpenFire'
import { Col, Row, Card } from 'react-bootstrap';


function Fire() {
    return (
        <Card style={{ border: "3px #52627F solid" }}>
            <Row>
                <Col><OpenFire /></Col>
            </Row>
        </Card>
    );
}

export default Fire;