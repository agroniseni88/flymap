import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Water from '../pages/Water';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';



class MyRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Gallery" component={Gallery} />
                <Route exact path="/water" component={Water} />
            </Switch>
        );
    }
}

export default MyRoutes;