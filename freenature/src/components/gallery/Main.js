import React, { Component } from 'react';
import Title from './Title';
import { Route } from 'react-router-dom';
import bivakzones from '../bivakzones.json';
import { Col } from 'react-bootstrap';
import Media1 from '../Media1'

class Main extends Component {

    render() {
        console.log(bivakzones.features[2])
        return (
            <div >
                <Route exact path="/gallery" render={() => (
                    <div>
                        <Title title={'Bivakzone Gallery'} />

                        <Col xs={12} className='media1' style={{ fontSize: '16px', color: '#354418', overflowY: 'auto', overflowX: ' hidden', backgroundColor: '#E5F4F2', height: '600px', margin: '10px' }}>
                            <Media1 />
                        </Col>
                    </div>
                )} />
            </div>
        )
    }
}

export default Main;