import React from 'react';
import MapBe from '../components/MapBe'
import { Col, Row, Card } from 'react-bootstrap';


function Home() {
    return (
        <Card style={{ border: '5px #52627F solid' }}>
            <Row>
                <Col><MapBe /></Col>
            </Row>
        </Card>
    );
}

export default Home;