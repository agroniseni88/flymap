import React from 'react';
import { Media, Col, Row, Card } from 'react-bootstrap';
import bivakzones from './bivakzones.json';
import MapBe from './MapBe'


export default function Media1() {
    return (
        <div>

            <Row>
                <Col xs={12} md={8}><MapBe /></Col>

                <Col sm={4} style={{ overflowY: ' scroll', backgroundColor: 'lightblue', height: '600px' }}>
                    {
                        bivakzones.features
                            .map((bivakzone) => {
                                if (bivakzone.geometry.type === 'Point') {
                                    return (bivakzone)

                                } else {
                                    bivakzone.geometry.coordinates =
                                        bivakzone.geometry.coordinates[0][0]
                                    bivakzone.geometry.type = 'Point'
                                    return (bivakzone)
                                }
                            })

                            .map((bivakzone) => (



                                <ul className="list-unstyled" bivakzone={bivakzone} key={bivakzone.id}  >
                                    <Media as="li" >

                                        <img
                                            width={200}
                                            height={200}
                                            className="mr-3"
                                            src={`${bivakzone.properties.image}`}
                                            style={{ boxShadow: '0px 2px 2px #b2d0d5' }}
                                            alt="bivakzone"
                                        />
                                        <Media.Body >

                                            <h5>   {bivakzone.properties.name}    </h5>
                                            <Card.Link href={bivakzone.properties.website} style={{ color: 'green' }}><i className="fas fa-seedling"></i>see Website</Card.Link>

                                        </Media.Body>
                                    </Media>
                                    <hr /><hr />

                                </ul>

                            ))
                    }
                </Col>

            </Row>


        </div>
    )
}











