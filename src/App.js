import React, { useEffect, useState } from 'react';
import Header from './components/HeaderFooter/Header';
import Body from './components/Body/Body';
import Footer from './components/HeaderFooter/Footer';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-238751221-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const [dyslexia, setDyslexia] = useState(JSON.parse(window.localStorage.getItem('dyslexia')));

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  useEffect(() => {
    localStorage.setItem('dyslexia', dyslexia);
}, [dyslexia]);
  return (
    <div className={ (dyslexia ? "font-dyslexic" : "font-segoe") + " " +"hi"}>
      <Header dys={dyslexia} setDys={setDyslexia}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
