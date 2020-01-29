import React from 'react';
import MapBe from './components/MapBe';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';


function App() {
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

export default App