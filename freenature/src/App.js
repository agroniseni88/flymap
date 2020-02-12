import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/style.css';
import { LocalizeProvider } from "react-localize-redux";


function App() {
  return (
    <div className="App">

      <Router>

        <LocalizeProvider>    <Header /> </LocalizeProvider>
        <Routes />
        <Footer />
      </Router>

    </div>
  );
}

export default App;



