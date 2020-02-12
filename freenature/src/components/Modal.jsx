import React, { Component } from "react";
import { Card } from "react-bootstrap";
import getFeature from "./filterer";


const features = [
  "opening_hours",
  "reservation",
  "openfire",
  "drinking_water",
  "toilets",
  "dog"
];

class Modal extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.bivakzone.properties.name}</Card.Title>
          <div>
            {features.map(feature => {
              const result = getFeature(this.props.bivakzone, feature);
              if (Object.keys(result).length !== 0) {
                return (
                  <div>
                    {Object.entries(result).map((entry) => {
                      if (entry[0] === "openfire" && entry[1] === "yes") {
                        return <i className="fas fa-fire"></i>;
                      } else if (entry[0] === "openfire" && entry[1] === "no") {
                        return (
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-fire fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                        );
                      } else if (
                        entry[0] === "drinking_water" &&
                        entry[1] === "no"
                      ) {
                        return (
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-glass-whiskey fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                        );
                      } else if (
                        entry[0] === "drinking_water" &&
                        entry[1] === "yes"
                      ) {
                        return <i className="fas fa-glass-whiskey"></i>;
                      } else if (entry[0] === "toilets" && entry[1] === "yes") {
                        return <i className="fas fa-toilet"></i>;
                      } else if (entry[0] === "toilets" && entry[1] === "no") {
                        return (
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-toilet fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                        );
                      }

                      else if (entry[0] === "dog" && entry[1] === "yes") {
                        return <i className="fas fa-dog"></i>;
                      } else if (entry[0] === "dog" && entry[1] === "no") {
                        return (
                          <span className="fa-stack fa-1x">
                            <i className="fas fa-dog fa-stack-1x"></i>
                            <i
                              className="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
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
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default Modal;
