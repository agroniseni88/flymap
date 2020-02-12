import React from 'react';
import Card from 'react-bootstrap/Card';
import Main from '../components/gallery/Main'


function Gallery() {
    return (
        <div >
            <Card style={{ background: '#fff' }} className='photoGrid'>
                <Card.Body >
                    <Main />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Gallery;