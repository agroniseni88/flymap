import React from 'react';
import Marker from '../Marker';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div>
            <Container >
                <Card style={{ background: '#138086' }}>
                    <Card.Body className="text-center">
                        <Marker />
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
}

export default Home;