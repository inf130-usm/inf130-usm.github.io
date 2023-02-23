import React, { useEffect, useState, createContext } from 'react';
import Header from './components/HeaderFooter/Header';
import Body from './components/Body/Body';
import Footer from './components/HeaderFooter/Footer';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-238751221-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export const ModeContext = createContext();
export const FontContext = createContext();

function App() {
  const [dyslexia, setDyslexia] = useState(JSON.parse(window.localStorage.getItem('dyslexia')));
  const [night, setNight] = useState(JSON.parse(window.localStorage.getItem('night')));

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  useEffect(() => {
    localStorage.setItem('dyslexia', dyslexia);
  }, [dyslexia]);
  useEffect(() => {
    localStorage.setItem('night', night);
  }, [night]);
  return (
    <ModeContext.Provider value={night}>
      <FontContext.Provider value={dyslexia}>
        <div className={ (dyslexia ? "font-dyslexic" : "font-segoe") + " " + (night ? "night-mode" : "day-mode")}>
          <Header setDys={setDyslexia} setNight={setNight}/>
          <Body/>
          <Footer/>
        </div>
      </FontContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
