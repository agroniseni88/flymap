import React from 'react';
import Media1 from '../components/Media1';
import Toilets from '../components/Toilets'
import { Col, Row, Card } from 'react-bootstrap';


function Wc() {
    return (
        <Card style={{ border: "3px #138086 solid", padding: '0px', margin: "0px" }}>
            <Row>


                <Col className='media1' sm={4} style={{ fontSize: '16px', color: '#354418', overflowY: 'auto', overflowX: ' hidden', backgroundColor: '#E5F4F2', height: '600px' }}>
                    <Media1 />

                </Col>
                <Col sm={8}><Toilets /></Col>
            </Row>
        </Card>


    );
}

export default Wc;