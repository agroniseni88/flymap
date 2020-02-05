import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';



class MyRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Gallery" component={Gallery} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default MyRoutes;