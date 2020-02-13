import React from 'react';
import { Media, Card, Image } from 'react-bootstrap';
import bivakzones from './bivakzones.json';
import trein from "../image/trein.png";


function Media1() {
    return (
        <div>
            {bivakzones.features
                .map((bivakzone) => {
                    if (bivakzone.geometry.type === 'Point') {
                        return (bivakzone)
                    } else {
                        bivakzone.geometry.coordinates =
                            bivakzone.geometry.coordinates[0][0]
                        bivakzone.geometry.type = 'Point'
                        return (bivakzone)
                    }
                })

                .map((bivakzone) => (
                    <ul className="list-unstyled" bivakzone={bivakzone} key={bivakzone.id} >

                        <hr />   <Media >
                            <img
                                width={200}
                                height={200}
                                className="mr-3"
                                src={`${bivakzone.properties.image}`}
                                style={{ boxShadow: '0px 2px 2px #ADB4B6' }}
                                alt="bivakzone"
                            />
                            <Media.Body >

                                <h3>   {bivakzone.properties.name}    </h3>
                                <p>WGS84:  {bivakzone.geometry.coordinates[1]},  {bivakzone.geometry.coordinates[0]}  </p>
                                <p> Is there any toilets?  {bivakzone.properties.toilets}  </p>
                                <p> Drinking water?  {bivakzone.properties.drinking_water}  </p>
                                <p> Open fire?  {bivakzone.properties.openfire}  </p>
                                <p> Opening hours:  {bivakzone.properties.opening_hours}  </p>
                                <p> Is a reservation required?  {bivakzone.properties.reservation}  </p>
                                <Card.Link href={bivakzone.properties.website} style={{ fontSize: '22px', color: '#A4BB3B' }}><i className="fas fa-seedling"></i>see Website</Card.Link>
                                <Image
                                    src={trein}
                                    alt="trein location"
                                    style={{ padding: "0px", width: "300px" }}
                                ></Image>
                            </Media.Body>
                        </Media>

                    </ul>
                ))
            }
        </div >
    )
}

export default Media1;