import React, { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/HeaderFooter/Header';
import Body from './components/Body/Body';
import Footer from './components/HeaderFooter/Footer';
import './App.css';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-238751221-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
