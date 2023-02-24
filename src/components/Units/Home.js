import React, { useContext } from 'react';
import Emoji from '../Emoji';
//import Login from '../Login/Login.js';
import './units.css';
import { ModeContext } from '../../App';
import Content from '../../ContentJSON/Home.json';

const Home = () => {
    const night = useContext(ModeContext);
    return (
        <div className='unit'>
            <div className='home-title-pc flex space-between'>
                <label className='unit-title'>
                INF130 - Programación
                </label>
                {night ?
                    <img src={"./images/Logo-DI-Night.jpg"} className='unit-title-image' alt="Logo Departamento de Informática"/>
                    :
                    <img src={"./images/Logo-DI.png"} className='unit-title-image' alt="Logo Departamento de Informática"/>
                }
            </div>
            <div className='home-title-cel'>
                {night ?
                    <img src={"./images/Logo-DI-Night.jpg"} className='unit-title-image' alt="Logo Departamento de Informática"/>
                    :
                    <img src={"./images/Logo-DI.png"} className='unit-title-image' alt="Logo Departamento de Informática"/>
                }
                <label className='unit-title'>
                INF130 - Programación
                </label>  
            </div>
            <div className='unit-content'>
                <p><b>{Content["p0"]}</b> <Emoji symbol="👋" label="waving hand"/></p>
                <p>{Content["p1"]}</p>
                <p>{Content["p2"]}</p>
                <p>{Content["p3"]}</p>
                <p>{Content["p4"]} <Emoji symbol="✨" label="sparkles"/></p>
            </div>
            <div className="right-align">
                <div>
                    <label><Emoji symbol="📝" label="note"/><b>{Content["p5"]}</b></label><br/>
                    <label>{Content["p6"]}<br/>{Content["p7"]}</label>
                </div>
                {/*<Login/>*/}
            </div>
        </div>
    );
}

export default Home;
