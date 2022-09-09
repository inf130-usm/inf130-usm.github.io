import React, { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/HeaderFooter/Header';
import Body from './components/Body/Body';
import Footer from './components/HeaderFooter/Footer';
import './App.css';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-2E4BMVMC2T"; // OUR_TRACKING_ID

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <>
      <ScrollToTop/>
      <Header/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
