import React from 'react';
import Media1 from '../components/Media1';
import Dog from '../components/Dog'
import { Col, Row, Card } from 'react-bootstrap';


function DogYes() {
    return (

        <Card style={{ padding: '0px', margin: "0px" }}>
            <Row>



                <Col className='media1' sm={4} style={{ fontSize: '16px', color: '#354418', overflowY: 'auto', overflowX: ' hidden', backgroundColor: '#E5F4F2', height: '600px' }}>
                    <Media1 />

                </Col>

                <Col sm={8}><Dog /></Col>
            </Row>
        </Card>




    );
}

export default DogYes;