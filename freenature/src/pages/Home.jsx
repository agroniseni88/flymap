import React from 'react';
import MapBe from '../components/MapBe';
import Card from 'react-bootstrap/Card';



function Home() {
    return (


        <Card style={{ background: 'rgb(9, 110, 34)' }}>
            <Card.Body className="text-center">
                <MapBe />
            </Card.Body>
        </Card>


    );
}

export default Home;
