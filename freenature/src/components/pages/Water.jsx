import React from 'react';
import DrinkingWater from '../DrinkingWater'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Water() {

    return (
        <div>
            <Card style={{ background: '#138086' }}>
                <Card.Body className="text-center">
                    <DrinkingWater />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Water;