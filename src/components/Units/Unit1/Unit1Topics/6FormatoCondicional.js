import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/6FormatoCondicional.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const FormatoCondicional = () => {
    return (
        <div id='u1-formatocondicional'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-FormatoCondicional.xlsx' className="download-file" download>
                    
                    <IconContext.Provider value={{ className: 'excel-icon' }}>
                        <RiFileExcel2Fill/>
                    </IconContext.Provider> 
                    &nbsp;Descargar archivo
                </a>
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
                <div className='unit-image2'>
                    <img src={"/images/U1T6F4.gif"} className='unit-image' alt="Ejemplo formato condicional"/>
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