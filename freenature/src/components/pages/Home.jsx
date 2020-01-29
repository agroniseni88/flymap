import React from 'react';
import MapBe from '../MapBe';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


function Home() {
    return (
        <div>
            <Container >
                <Card style={{ background: '#138086' }}>
                    <Card.Body className="text-center">
                        <MapBe />
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
}

export default Home;
