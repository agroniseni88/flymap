import React from 'react';
import Dog from '../components/Dog'
import { Col, Row, Card } from 'react-bootstrap';


function DogYes() {
    return (
        <Card style={{ border: '5px #52627F solid' }}>
            <Row>
                <Col ><Dog /></Col>
            </Row>
        </Card>
    );
}

export default DogYes;