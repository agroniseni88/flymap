import React from 'react';
import Media1 from '../components/Media1';
import Toilets from '../components/Toilets'
import { Col, Row } from 'react-bootstrap';


function Wc() {
    return (
        <Row>
            <Col xs={12} md={8}><Toilets /></Col>

            <Col sm={4} style={{ overflowY: ' scroll', backgroundColor: 'lightblue', height: '600px' }}>
                <Media1 />

            </Col>
        </Row>
    );
}

export default Wc;