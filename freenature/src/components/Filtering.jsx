import React, { Component } from 'react';
import getFeature from './filterer';
import bivakzone from './bivakzones.json'
import Icon from './Icon'

const features = ["openfire", "drinking_water", "toilets",'dog']
const featureGetting = features.map((feature) => getFeature(bivakzone.features, feature))
class Modal extends Component {
   
    render() { 

       
    return (
        <div>
        <Icon>
             {
                featureGetting
                .reduce((acc, feature)=> {
                    acc[feature[0]] = feature[1]
                    return acc;
                })
            }
            
        </Icon>
        </div>
    )
} };

export default Modal;

