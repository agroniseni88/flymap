<<<<<<< HEAD
import React from 'react'
import Question from './icons';
class Myapp extends React.Component {
  render() {
    return (
    <div>
      <Question  />
    </div>  
    );
  }
=======
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
      <Footer />
    </div>
  );
>>>>>>> 7bbfead6a2c34913eab4a62c1ad65d7f596b7712
}

export default Myapp