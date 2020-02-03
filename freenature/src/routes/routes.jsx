import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../components/pages/Home';
import Water from '../components/pages/Water';


class MyRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/water" component={Water} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default MyRoutes;