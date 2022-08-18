import React from 'react';
import Emoji from '../../Emoji';
import './units.css';
import Content from '../../ContentJSON/Home.json';

const Home = () => {
    return (
        <div className='unit'>
            <div className='flex space-between'>
                <label className='unit-title'>
                INF130 - Programación
                </label>  
                <img src={"./images/Logo-DI.png"} className='unit-title-image' alt="Logo Departamento de Informática"/>
            </div>
            <div className='unit-content'>
                <p><b>{Content["p0"]}</b> <Emoji symbol="👋" label="waving hand"/></p>
                <p>{Content["p1"]}</p>
                <p>{Content["p2"]}</p>
                <p>{Content["p3"]}</p>
                <p>{Content["p4"]}</p>
            </div>
            <div className='right-align'>
                <label><Emoji symbol="📝" label="note"/><b>{Content["p5"]}</b></label><br/>
                <label>{Content["p6"]}<br/>{Content["p7"]}</label>
            </div>
        </div>
    );
}

export default Home;
