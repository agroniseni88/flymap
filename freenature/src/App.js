import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/style.css";
import { LocalizeProvider } from "react-localize-redux";
//import { Container, Row, Col } from "react-bootstrap";
//import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <LocalizeProvider>
          <Header />{" "}
        </LocalizeProvider>
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/*
 <Router>
    <Container>
        <Header />
 
      <Row>
        <Col>
        <Routes />
        </Col>
      </Row>
      <Row>
        <Col xs='6'>
        <Gallery />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
      </Container>
      </Router>

*/
