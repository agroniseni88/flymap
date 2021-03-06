import React from 'react';
import { Media, Card, Image } from 'react-bootstrap';
import bivakzones from './bivakzones.json';
import trein from "../image/trein.png";


/*const features = [
    "openfire",
    "drinking_water",
    "toilets",
    "dog",
    "opening_hours",
    "reservation"
  ];
  function getDetails(i, bivakzone) {
    if(bivakzone.properties[i] === undefined){
        return("")
    }else{
        return(<li>{i + ':' + bivakzone.properties[i]}</li>)
    }
    }
*/
export default function Media1() {
    return (
        <div>
            {
                bivakzones.features
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
                        <ul className="list-unstyled" style={{ margin: '7px' }} bivakzone={bivakzone} key={bivakzone.id}>
                            <Media as="li">
                            <div>
                            <h3 style={{ margin: '10px', textAlign:'center' }}>{bivakzone.properties.name}</h3>
                                <img
                                    width={300}
                                    height={200}
                                    className="mr-3"
                                    src={`${bivakzone.properties.image}`}
                                    style={{ boxShadow: '0px 2px 2px #b2d0d5', marginLeft:'75px', marginTop:'15px' }}
                                    alt="bivakzone"
                                />
                                <Media.Body 
                                    style={{ marginLeft:'20px' }}                                    >
                                    <br></br> 
                                    <p> WGS84:  {bivakzone.geometry.coordinates[1]},  {bivakzone.geometry.coordinates[0]}  </p>
                                    {bivakzone.properties.toilets === undefined ? null : bivakzone.properties.toilets === 'yes' ? (<p> Is there any toilets?   Yes </p>) : bivakzone.properties.toilets === 'no' ? (<p> Is there any toilets?   No </p>) : null}  
                                    {bivakzone.properties.toilets === undefined ? null : bivakzone.properties.drinking_water === 'yes' ? (<p> Can I find there drinking water?   Yes </p>) : bivakzone.properties.drinking_water === 'no' ? (<p> Can I find there drinking water?  No </p>) : null}  
                                    {bivakzone.properties.openfire === undefined ? null : bivakzone.properties.openfire === 'yes' ? (<p> Is open fire allowed?   Yes </p>) : bivakzone.properties.openfire === 'no' ? (<p> Is open fire allowed?   No </p>) : null}  
                                    {bivakzone.properties.reservation === undefined ? null : bivakzone.properties.reservation === 'yes' ? (<p> Is a reservation required?   Yes </p>) : bivakzone.properties.reservation === 'no' ? (<p> Is a reservation required?   No </p>) : null}  
                                    <Card.Link href={bivakzone.properties.website} target="_blank" style={{ fontSize: '15px', color: '#044A18' }}><u>more information</u></Card.Link>
                                    <br></br>
                                    <br></br>
                                    <Image
                                    src={trein}
                                    alt="trein location"
                                    style={{ padding: "0px", width: "300px" }}
                                ></Image>
                                </Media.Body>
                                </div>
                            </Media>
                            <br></br>

                            <hr />
                        </ul>
                    ))
            }
        </div >
    )
}











