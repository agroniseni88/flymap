import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Modal from '../components/modal/Modal'


class MyRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/modal" component={Modal} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default MyRoutes;