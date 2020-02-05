import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import { Popup } from 'react-leaflet';
import getFeature from './filterer';
//import renderBivakzone from './renderBivakzone'
import bivakzone from './bivakzones.json'

const features = ['opening_hours', "reservation", "openfire", "drinking_water", "toilets"];
const featt = getFeature();
console.log(featt)
class Modal extends Component {
   
    render() { 
       
    return (
        <div>
        <Card>
            
                   {    
                        features
                   .map((feature) => {console.log(feature)
                     return (<li>{feature+ ':' + getFeature(bivakzone.features, feature)}</li>)})
                           // .map(b => <li>{feature + ':' + bivakzone.properties[i]}</li>)

                    } 
        </Card>
        </div>
    )
} };

export default Modal;






/* <ul>
{features.map((feature) =>
    getFeature(feature, bivakzone)
)}
</ul>


function getFeature(i, bivakzone) {
    if (bivakzone.properties[i] === undefined) {
        return ("")
    } else {
        return (<li>{i + ':' + bivakzone.properties[i]}</li>)
    }
}
getFeatures(bivakzones.features, "drınkıng_water")

*/