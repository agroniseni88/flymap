import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Water from '../pages/Water';
import OpenFire from '../components/OpenFire';
import Toilets from '../components/Toilets'
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Med from '../pages/Med';


class MyRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Gallery" component={Gallery} />
                <Route exact path="/water" component={Water} />
                <Route exact path="/toilets" component={Toilets} />
                <Route exact path="/fire" component={OpenFire} />
                <Route exact path="/m" component={Med} />
            </Switch>
        );
    }
}

export default MyRoutes;