import React from 'react';
import MapBe from '../components/MapBe';
import Card from 'react-bootstrap/Card';
import Main from '../components/gallery/Main'
import { Container, Row , Col} from 'react-bootstrap';



function Home() {
    return (

<div>
    <Container style={{padding: '0', margin: '0'}}>
        <Row>
            <Col xs='6'>
        <Card style={{ background: '#fff', width: '100%' }}>
            <Card.Body className="text-center">
                <MapBe />
            </Card.Body>

        </Card>
        </Col>
        <Col xs='6'>
        <Card style={{ background: '#fff', width: '100%'}} className='photoGrid'>
        <Card.Body >
            <Main />
        </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>

    );
}

export default Home;
