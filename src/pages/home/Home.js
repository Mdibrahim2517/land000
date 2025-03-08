import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent/MainContent';
import Benifits from './components/Benifits/Benifits';
import About from './components/About/About';
import Prices from './components/Prices/Prices';
import Serivice from './components/Serivice/Serivice';
import Footer from './components/Footer/Footer';
const Home = () => {
  return (
    <>
      <NavBar />
      <MainContent />
      <Benifits />
      <About />
      <Prices />
      {/* <Serivice /> */}
      <Footer />
    </>
  );
};

export default Home;