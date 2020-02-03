import React from 'react';
import Card from 'react-bootstrap/Card';
import Main from '../gallery/Main'


function Gallery() {
    return (
        <div>

            <Card style={{ background: '#fff' }}>
                <Card.Body className="text-center">
                    <Main />
                </Card.Body>
            </Card>


        </div>
    );
}

export default Gallery;