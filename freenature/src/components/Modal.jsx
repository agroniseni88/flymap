import React, { Component } from "react";
import { Card } from "react-bootstrap";
import getFeature from "./filterer";
const features = [
  "opening_hours",
  "reservation",
  "openfire",
  "drinking_water",
  "toilets"
];
//const images = ['image', 'image:1', 'image:2', 'image:3', 'image:4']
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
                    {Object.entries(result).map(function (entry) {
                      if (entry[0] === "openfire" && entry[1] === "yes") {
                        return <i class="fas fa-fire"></i>;
                      } else if (entry[0] === "openfire" && entry[1] === "no") {
                        return (
                          <span class="fa-stack fa-1x">
                            <i class="fas fa-fire fa-stack-1x"></i>
                            <i
                              class="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                        );
                      } else if (
                        entry[0] === "drinking_water" &&
                        entry[1] === "no"
                      ) {
                        return (
                          <span class="fa-stack fa-1x">
                            <i class="fas fa-glass-whiskey fa-stack-1x"></i>
                            <i
                              class="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                        );
                      } else if (
                        entry[0] === "drinking_water" &&
                        entry[1] === "yes"
                      ) {
                        return <i class="fas fa-glass-whiskey"></i>;
                      } else if (entry[0] === "toilets" && entry[1] === "yes") {
                        return <i class="fas fa-toilet"></i>;
                      } else if (entry[0] === "toilets" && entry[1] === "no") {
                        return (
                          <span class="fa-stack fa-1x">
                            <i class="fas fa-toilet fa-stack-1x"></i>
                            <i
                              class="fas fa-ban fa-stack-2x"
                              style={{ color: "Tomato" }}
                            ></i>
                          </span>
                        );
                      } else if (Object.keys(result).length !== 0) {
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
              } else return null;
            })}
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default Modal;
