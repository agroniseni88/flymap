import React, { Component } from 'react';
import Title from './Title';
import { Route } from 'react-router-dom';
import bivakzones from '../bivakzones.json';
import { Card, Container, Col } from 'react-bootstrap';

class Main extends Component {

    render() {

        console.log(bivakzones.features[2])
        return (
            <div >
                <Route exact path="/gallery" render={() => (
                    <div>
                        <Title title={'PhotoWall'} />

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
                                    <ul bivakzone={bivakzone} className='figure'>
                                        <Container >
                                            <Col>
                                                <Card style={{ width: '18rem' }}>


                                                    <Card.Img className='photo' bg="info" variant="top" src={`${bivakzone.properties.image}`} thumbnail />
                                                    <Card.Title>{bivakzone.properties.name}</Card.Title>
                                                    <a href={bivakzone.properties.website}><i class="fas fa-map-marked-alt"></i></a>
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