import React from 'react';
import error from '../img/error.jpg';
import { Row, Col } from 'react-bootstrap';

export default function NotFound() {
    return (
        <div>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <img src={error} alt="nature" style={{ padding: '50px', width: "300px" }} />
                </Col>
            </Row>
        </div>
    )
}
