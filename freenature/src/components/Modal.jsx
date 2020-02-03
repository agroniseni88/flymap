import React from 'react';
import { Card } from 'react-bootstrap';

const features = ['opening_hours',"reservation","openfire","drinking_water","toilets"];
function getFeature(i, bivakzone) {
if(bivakzone.properties[i] === undefined){
    return("")
}else{
    return(<li>{i + ':' + bivakzone.properties[i]}</li>)
}
}

const Modal = ({ bivakzone }) => {
   return(
        <Card>
            <Card.Img bg="info" className="image" variant="top" src={`${bivakzone.properties.image}`} />
            <Card.Body>
                <Card.Title>{bivakzone.properties.name}</Card.Title>
                <Card.Text>
                    
                    <ul>
                   { features.map((feature) => 
                      getFeature(feature,bivakzone)
                   ) }
                   {
                       bivakzone.properties.map((bivakzone) => {
                          if(bivakzone.properties.openfire === 'yes'){
                              return(<i class="fas fa-fire">{}</i>)
                          } 
                       }
                       )
                   }
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
   )
};

export default Modal;




