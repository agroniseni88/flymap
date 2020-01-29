import React from 'react';
import DrinkingWater from '../DrinkingWater'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Water() {
    return (
        <div>
            <Container >
                <Card style={{ background: '#138086' }}>
                    <Card.Body className="text-center">
                        <DrinkingWater />
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
}

export default Water;