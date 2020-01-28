import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import Marker from '../components/Marker';
import Modal from '../components/modal/Modal';

class MyRoutes extends React.Component {


    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/marker" component={Marker} />
                <Route exact path="/modal" component={Modal} />

                <Route exact path="/notfound" component={NotFound} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default MyRoutes;