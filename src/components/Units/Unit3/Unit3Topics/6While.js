import React, { useContext } from 'react';
import Content from '../../../../ContentJSON/U3/6While.json';
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';
import { ModeContext } from '../../../../App';

const EstructuraRepetitiva = () => {
    const night = useContext(ModeContext);

    return (
        <div id='u3-Estructurarepetitiva'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U3-While.xlsm' className={ night ? "download-file color-white" : "download-file"} download>
                    
                    <IconContext.Provider value={{ className: 'excel-icon' }}>
                        <RiFileExcel2Fill/>
                    </IconContext.Provider> 
                    &nbsp;Descargar archivo
                </a>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"][0]}
                    <i>{Content["p1"][1]}</i>
                    {Content["p1"][2]}
                </p>
                <p>
                    {Content["p2"][0]}
                    <i>{Content["p2"][1]}</i>
                    {Content["p2"][2]}
                </p>
                <p>
                    {Content["p3"]}
                </p>
                <p>
                    {Content["p4"]}
                </p>
                <div className='flex space-between'>
                    <div className="unit-image3">
                        <img src={"/images/U3T6F1.jpg"} className='unit-image' alt="Sintaxis while wend"/>
                    </div>
                    <div className="unit-image3">
                        <img src={"/images/U3T6F2.jpg"} className='unit-image' alt="Sintaxis do while loop"/>
                    </div>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T6F3.jpg"} className='unit-image' alt="Diagrama while"/>
                </div>
                <p>
                    {Content["p6"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T6F4.jpg"} className='unit-image' alt="Sintaxis do loop while"/>
                </div>
                <p>
                    {Content["p7"]}
                </p>
                <p>
                    {Content["p8"][0]}
                    <b style={{color:'red'}}><u>{Content["p8"][1]}</u></b>
                    {Content["p8"][2]}
                </p>
                <ul>
                    <li>{Content["p9"]}</li>
                    <li>{Content["p10"]}</li>
                </ul>
                <p>
                    {Content["p11"]}
                </p>
                <p>
                    {Content["p12"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T6F5.jpg"} className='unit-image' alt="Código ejemplo while 1"/>
                </div>
                <div className="unit-image2">
                    <img src={"/images/U3T6F6.gif"} className='unit-image' alt="Ejemplo while 1"/>
                </div>
                <p>
                    {Content["p13"][0]}
                    <i>{Content["p13"][1]}</i>
                    {Content["p13"][2]}
                </p>
                <p> 
                    {Content["p14"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T6F7.jpg"} className='unit-image' alt="Código ejemplo while 2"/>
                </div>
                <div className="unit-image2">
                    <img src={"/images/U3T6F8.gif"} className='unit-image' alt="Ejemplo while 2"/>
                </div>
                <YoutubeLink embedId="qPaqaqXjoHA"/>
                <p></p>
                <YoutubeLink embedId="VmqziRdxNPA"/>
                <p></p>
                <YoutubeLink embedId="vSljDjY2-TI"/>
                <p></p>
                <YoutubeLink embedId="2LHQguJHNbU"/>
                <p></p>
                <YoutubeLink embedId="Ccfy9-MM9lw"/>
            </div>
        </div>
    );
}

export default EstructuraRepetitiva;