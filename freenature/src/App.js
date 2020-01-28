
import React from 'react';
import MapBe from './components/MapBe';
import Header from './components/Header';
import Symbols from './components/Symbols';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <div className="App" >
      <Header />
      <MapBe />
      <Symbols />

      <div>Tamar</div>
      <Footer />
    </div>
  );
}

export default App
