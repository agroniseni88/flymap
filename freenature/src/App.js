import React from 'react';
import MapBe from './components/MapBe';
import Header from './components/Header';
import Symbols from './components/Symbols';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

import './App.css';


function App() {
  return (
    <div className="App" >
      <Container >
        <Card style={{ background: 'rgb(168, 219, 170)' }}>

          <Card.Body>
            <Header />
            <MapBe />
            <Symbols />
            <Footer />
          </Card.Body>
        </Card>

      </Container>
    </div>
  );
}

export default App;
