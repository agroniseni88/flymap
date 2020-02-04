import React from 'react';
import MapBe from '../components/MapBe';
import Card from 'react-bootstrap/Card';
//import { Container } from 'react-bootstrap';


function Home() {
    return (
        <div>

            <Card style={{ background: '#138086' }}>
                <Card.Body className="text-center">
                    <MapBe />
                </Card.Body>
            </Card>


        </div>
    );
}

export default Home;
