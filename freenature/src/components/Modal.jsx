import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import getFeature from './filterer';
const features = ['opening_hours', 'reservation', 'openfire', 'drinking_water', 'toilets'];
class Modal extends Component {
  render() {
    return (
      <div>
        <Card>
          <ul>
            {features.map(feature => {
              const result = getFeature(this.props.bivakzone, feature);
              if (Object.keys(result).length !== 0) {
                return <div>{Object.entries(result).map( function(entry){
                  if(entry[0] === 'openfire' && entry[1] === 'yes') {
                      return <i class="fas fa-fire"></i>
              } else if (entry[0] === 'openfire' && entry[1] === 'no') {
                return (<span class="fa-stack fa-1x">
                <i class="fas fa-fire fa-stack-1x"></i>
                <i class="fas fa-ban fa-stack-2x" style={{color:"Tomato"}}></i></span>)
        } else if (entry[0] === 'drinking_water' && entry[1] === 'no') {
          return (<span class="fa-stack fa-1x">
          <i class="fas fa-glass-whiskey fa-stack-1x"></i>
          <i class="fas fa-ban fa-stack-2x" style={{color:"Tomato"}}></i></span>)
  } else if (entry[0] === 'drinking_water' && entry[1] === 'yes') {
    return <i class="fas fa-glass-whiskey"></i>
} else if (entry[0] === 'toilets' && entry[1] === 'yes') {
  return <i class="fas fa-toilet"></i>
} else if (entry[0] === 'toilets' && entry[1] === 'yes') {
  return (<span class="fa-stack fa-1x">
  <i class="fas fa-toilet fa-stack-1x"></i>
  <i class="fas fa-ban fa-stack-2x" style={{color:"Tomato"}}></i></span>)
} 
            })}</div>;
          } else return null;            
            })}
          </ul>
        </Card>
      </div>
    );
  }
}
export default Modal;
/* <ul>
{features.map((feature) =>
    getFeature(feature, bivakzone)
)}
</ul>
​
​
function getFeature(i, bivakzone) {
    if (bivakzone.properties[i] === undefined) {
        return ("")
    } else {
        return (<li>{i + ':' + bivakzone.properties[i]}</li>)
    }
}
getFeatures(bivakzones.features, "drınkıng_water")
​
*/







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


{    
                        features
                   .map((feature) => {
                     return (<li>{feature+ ':' + getFeature(bivakzone.features, feature)}</li>)})
                           // .map(b => <li>{feature + ':' + bivakzone.properties[i]}</li>)

                    } 
*/