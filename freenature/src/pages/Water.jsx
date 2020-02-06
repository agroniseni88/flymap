import React from 'react';
import Card from 'react-bootstrap/Card';
import DrinkingWater from '../components/DrinkingWater'

export default function Water() {
    return (
        <Card style={{ background: 'rgb(127, 199, 114)' }} >
            <Card.Body >
                <DrinkingWater />
            </Card.Body>
        </Card>
    )
}
