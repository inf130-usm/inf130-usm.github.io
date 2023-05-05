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
  const [night, setNight] = useState(JSON.parse(window.localStorage.getItem('night')));

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  useEffect(() => {
    localStorage.setItem('night', night);
  }, [night]);
  return (
    <ModeContext.Provider value={night}>
      <div className={night ? "night-mode" : "day-mode"}>
        <Header setNight={setNight}/>
        <Body/>
        <Footer/>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
