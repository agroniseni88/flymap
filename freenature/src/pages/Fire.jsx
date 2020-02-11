import React from 'react';
import Media1 from '../components/Media1';
import OpenFire from '../components/OpenFire'
import { Col, Row } from 'react-bootstrap';


function Fire() {
    return (
        <Row>
            <Col xs={12} md={8}><OpenFire /></Col>

            <Col sm={4} style={{ overflowY: ' scroll', backgroundColor: 'lightblue', height: '600px' }}>
                <Media1 />

            </Col>
        </Row>
    );
}

export default Fire;