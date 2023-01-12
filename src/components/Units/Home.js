import React from 'react';
import Emoji from '../Emoji';
//import Login from '../Login/Login.js';
import './units.css';
import Content from '../../ContentJSON/Home.json';

const Home = () => {
    return (
        <div className='unit'>
            <div className='home-title-pc flex space-between'>
                <label className='unit-title'>
                INF130 - Programación
                </label>  
                <img src={"./images/Logo-DI.png"} className='unit-title-image' alt="Logo Departamento de Informática"/>
            </div>
            <div className='home-title-cel'>
                <img src={"./images/Logo-DI.png"} className='unit-title-image' alt="Logo Departamento de Informática"/>
                <label className='unit-title'>
                INF130 - Programación
                </label>  
            </div>
            <div className='unit-content'>
                <p><b>{Content["p0"]}</b> <Emoji symbol="👋" label="waving hand"/></p>
                <p>{Content["p1"]}</p>
                <p>{Content["p2"]}</p>
                <p>{Content["p3"]}</p>
                <p>{Content["p4"]}</p>
                <p>{Content["p5"]} <Emoji symbol="✨" label="sparkles"/></p>
            </div>
            <div className="right-align">
                <div>
                    <label><Emoji symbol="📝" label="note"/><b>{Content["p6"]}</b></label><br/>
                    <label>{Content["p7"]}<br/>{Content["p8"]}</label>
                </div>
                {/*<Login/>*/}
            </div>
        </div>
    );
}

export default Home;
