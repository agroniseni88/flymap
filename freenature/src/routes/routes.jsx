import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Water from '../pages/Water';
import Fire from '../pages/Fire';
import Wc from '../pages/Wc'
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import DogYes from '../pages/DogYes';


class MyRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/water" component={Water} />
                <Route exact path="/toilets" component={Wc} />
                <Route exact path="/fire" component={Fire} />
                <Route exact path="/dog" component={DogYes} />
            </Switch>
        );
    }
}

export default MyRoutes;