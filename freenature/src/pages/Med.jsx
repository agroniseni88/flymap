import React from 'react';
import Media1 from '../components/Media1';
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <Card >
            <Card.Body className="text-center">
                <Media1 />
            </Card.Body>
        </Card>
    );
}

export default Home;