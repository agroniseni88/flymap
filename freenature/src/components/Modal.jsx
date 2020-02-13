import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";
import getFeature from "./filterer";
const features = [
  "openfire",
  "drinking_water",
  "toilets",
  "dog"
];
//const images = ['image', 'image:1', 'image:2', 'image:3', 'image:4']
class Modal extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.bivakzone.properties.name}</Card.Title>
          <div>
          <Row>
            {features.map(feature => {
              const result = getFeature(this.props.bivakzone, feature);
              if (Object.keys(result).length !== 0) {
                return (
                  <div>
                    {Object.entries(result).map((entry) => {
                      if (entry[0] === "openfire" && entry[1] === "yes") {
                        return <span style={{fontSize: "20px", margin:'5px'}}>
                        <i className="fas fa-fire"></i>
                        </span>
                      } else if (entry[0] === "openfire" && entry[1] === "no") {
                        return (
                          <span style={{fontSize: "20px", margin:'5px'}}>
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-fire fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                          </span>
                        );
                      } else if (
                        entry[0] === "drinking_water" &&
                        entry[1] === "no"
                      ) {
                        return (
                          <span style={{fontSize: "20px",  margin:'5px'}}>                          
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-glass-whiskey fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                          </span>
                        );
                      } else if (
                        entry[0] === "drinking_water" &&
                        entry[1] === "yes"
                      ) {
                        return (
                        <span style={{fontSize: "20px", margin:'5px'}}>                                              
                        <i className="fas fa-glass-whiskey"></i> 
                        </span>
                        )
                      } else if (entry[0] === "toilets" && entry[1] === "yes") {
                        return (
                          <span style={{fontSize: "20px", margin:'5px'}}>                                                                      
                        <i className="fas fa-toilet"></i>
                        </span> 
                        )
                      } else if (entry[0] === "toilets" && entry[1] === "no") {
                        return (
                        <span style={{fontSize: "20px", margin:'5px'}}>                                              
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-toilet fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                          </span>
                        );
                      }

                      else if (entry[0] === "dog" && entry[1] === "yes") {
                        return (
                        <span style={{fontSize: "20px",  margin:'5px'}}>     
                        <i className="fas fa-dog"></i>
                        </span>
                        )
                      } else if (entry[0] === "dog" && entry[1] === "no") {
                        return (
                          <span style={{fontSize: "20px", margin:'5px'}}>     
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-dog fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                          </span>
                        );
                      }
                      else if (Object.keys(result).length !== 0) {
                        return (
                          <div>
                            {Object.entries(result).map(
                              entry => entry[0] + ": " + entry[1]
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              } else { return null; }
            })}
                  </Row>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default Modal;
