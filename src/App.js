import React from 'react';


import './App.css';
import NavBar from './pages/home/components/NavBar';
import MainContent from './pages/home/components/MainContent/MainContent';
import Benifits from './pages/home/components/Benifits/Benifits';
import About from './pages/home/components/About/About';
import Prices from './pages/home/components/Prices/Prices';
import Footer from './pages/home/components/Footer/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <MainContent />
      <Benifits />
      <About />
      <Prices />
      <Footer />
    </>


  );
};

export default App;
