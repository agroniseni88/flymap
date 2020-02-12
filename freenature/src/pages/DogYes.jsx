import React from 'react';
import Dog from '../components/Dog'
import { Col, Row, Card } from 'react-bootstrap';


function DogYes() {
    return (
        <Card style={{ border: '5px green solid' }}>
            <Row>
                <Col ><Dog /></Col>
            </Row>
        </Card>
    );
}

export default DogYes;