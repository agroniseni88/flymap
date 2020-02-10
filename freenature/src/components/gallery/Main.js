import React, { Component } from 'react';
import Title from './Title';
import { Route, Link } from 'react-router-dom';
import bivakzones from '../bivakzones.json';
import { Card, Container, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class Main extends Component {

    render() {

        console.log(bivakzones.features[2])
        return (
            <div >
                <Route exact path="/gallery" render={() => (
                    <div>
                        <Title title={'Bivakzone Gallery'} />

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
                                }).sort()

                                .map((bivakzone) => (
                                    <ul bivakzone={bivakzone} className='figure' key={bivakzone.id}>
                                        <Container >
                                            <Col>
                                                <Card style={{ width: '18rem' }}>


                                                    <Link to='/'><Card.Img className='photo' bg="info" variant="top" src={`${bivakzone.properties.image}`} /></Link>
                                                    <Card.Title>{bivakzone.properties.name}</Card.Title>
                                                    <ListGroup variant="flush">
                                                        <ListGroupItem>opening hours : {bivakzone.properties.opening_hours}</ListGroupItem>
                                                        <ListGroupItem>reservation : {bivakzone.properties.reservation}</ListGroupItem>
                                                        <ListGroupItem>{bivakzone.properties.maxstay}</ListGroupItem>
                                                    </ListGroup>
                                                    <Card.Link href={bivakzone.properties.website} style={{ color: 'green' }}><i className="fas fa-seedling"></i>see Website</Card.Link>

                                                </Card>
                                            </Col>
                                        </Container>

                                    </ul>
                                ))
                        }

                    </div>
                )} />

            </div>
        )
    }
}

export default Main;