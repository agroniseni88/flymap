import React, { Component } from "react";
import Title from "./Title";
import { Route } from "react-router-dom";
import bivakzones from "../bivakzones.json";
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/gallery"
          render={() => (
            <div>
              <Title title={"Gallery"} />

              {bivakzones.features.map(bivakzone => (
                <ul bivakzone={bivakzone} className="figure" key={bivakzone.id}>
                  <Container>
                    <Card
                      style={{ width: "18rem", border: "none", padding: "0px" }}
                    >
                      <Card.Img
                        className="photo"
                        bg="info"
                        variant="top"
                        src={`${bivakzone.properties.image}`}
                      />
                      <br></br>
                      <Card.Title>{bivakzone.properties.name}</Card.Title>
                      <ListGroup variant="flush">
                        {
                          <ListGroupItem>
                            {bivakzone.properties.opening_hours ===
                            undefined ? null : (
                              <p>
                                {"Opening time: " +
                                  bivakzone.properties.opening_hours}
                              </p>
                            )}

                            {bivakzone.properties.maxstay ===
                            undefined ? null : (
                              <p>
                                {"You can stay this bivakzone a maximum of " +
                                  bivakzone.properties.maxstay}
                              </p>
                            )}
                          </ListGroupItem>
                        }
                      </ListGroup>
                      <Card.Link
                        href={bivakzone.properties.website}
                        target="_blank"
                        style={{ fontSize: "15px", color: "#044A18" }}
                      >
                        <u>more information</u>
                      </Card.Link>
                    </Card>
                  </Container>
                </ul>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
