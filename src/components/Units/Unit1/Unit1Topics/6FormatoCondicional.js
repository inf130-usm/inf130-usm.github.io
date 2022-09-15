import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/6FormatoCondicional.json';
import YoutubeLink from "../../../YouTubeLink";

const FormatoCondicional = () => {
    return (
        <div id='u1-formatocondicional'>
            <div className='unit-subtitle'>
                <label>
                    {Content["p0"]}
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T6F1.jpg"} className='unit-image' alt="Pestaña formato condicional"/>
                </div>
                <p>
                    {Content["p2"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T6F2.jpg"} className='unit-image' alt="Barras de color"/>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T6F3.jpg"} className='unit-image' alt="Más reglas"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T6F4.jpg"} className='unit-image' alt="Ejemplo formato condicional"/>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T6F5.jpg"} className='unit-image' alt="Administrar reglas"/>
                </div>
                <YoutubeLink embedId="aiPhBpMfFBM"/>
            </div>
        </div>
    );
}

export default FormatoCondicional;