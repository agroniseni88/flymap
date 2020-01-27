import React from 'react';
import { Card } from 'react-bootstrap';


const PopUp = ({ bivakzone }) => {
    console.log(bivakzone)
    return (
        <Card>
            <Card.Img bg="info" className="image" variant="top" src={`${bivakzone.properties.image}`} />
            <Card.Body>
                <Card.Title>{bivakzone.properties.name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>opening_hours:{bivakzone.properties.opening_hours}</li>
                        <li>reservation:{bivakzone.properties.reservation}</li>
                        <li>operator:{bivakzone.properties.operator}</li>
                        <li>openfire:{bivakzone.properties.openfire}</li>

                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default PopUp;




