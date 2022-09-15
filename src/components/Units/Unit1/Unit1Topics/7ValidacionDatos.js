import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/7ValidacionDatos.json';
import YoutubeLink from "../../../YouTubeLink";

const ValidacionDatos = () => {
    return (
        <div id='u1-validaciondatos'>
            <div className='unit-subtitle'>
                <label>
                    {Content["p0"]}
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"]}
                </p>
                <p>
                    {Content["p2"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F1.jpg"} className='unit-image' alt="Validación de datos"/>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F2.jpg"} className='unit-image' alt="Ventana validación de datos"/>
                </div>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F3.jpg"} className='unit-image3' alt="Criterios de validación"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F4.jpg"} className='unit-image' alt="Validación de lista"/>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T7F5.jpg"} className='unit-image' alt="Mensaje de entrada"/>
                </div>
                <p>
                    {Content["p6"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F6.jpg"} className='unit-image' alt="Mensaje de error"/>
                </div>
                <p>
                    {Content["p7"]}
                </p>
                <YoutubeLink embedId="aiPhBpMfFBM"/>
            </div>
        </div>
    );
}

export default ValidacionDatos;