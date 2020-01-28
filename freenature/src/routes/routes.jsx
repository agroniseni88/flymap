import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import Marker from '../components/Marker';
import Bike from '../components/Bicyclee';
import DrinkingWater from '../components/DrinkingWater';
import Bicycle from '../components/Bicyclee';
import Toilets from '../components/Toilets';


class MyRoutes extends React.Component {


    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/marker" component={Marker} />
                <Route exact path="/bicycle" component={Bike} />
                <Route exact path="/drinkingwater" component={DrinkingWater} />
                <Route exact path="/toilets" component={Toilets} />                                
                <Route exact path="/bicycle" component={Bicycle} />                
                <Route exact path="/notfound" component={NotFound} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default MyRoutes;