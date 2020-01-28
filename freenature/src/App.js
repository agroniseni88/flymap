import React, { Component } from 'react';
import Routes from './routes/routes';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';



import './App.css';

class App extends Component {


  render() {

    return (
      <div className="App">


        <Router>
          <Header />
          <Routes />
         
          <Footer />
        </Router>


      </div>
    );
  }
}

export default App;