import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U5/3EjemploDeUso.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const EjemploDeUso = () => {
    return (
        <div id='u5-teoria'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U5-EjemploDeUso.xlsm' className="download-file" download>
                    
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
                    {Content["p2"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T3F1.gif"} className='unit-image' alt="Hojas del Ejemplo"/>
                </div>
                <p>
                    <b>{Content["p3"][0]}</b>
                    {Content["p3"][1]}
                </p>
                <p>
                    <b>{Content["p4"][0]}</b>
                    {Content["p4"][1]}
                </p>
                <p>
                    <b>{Content["p5"][0]}</b>
                    {Content["p5"][1]}
                </p>
                <p>
                    {Content["p6"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T3F2.gif"} className='unit-image' alt="Uso del ejemplo"/>
                </div>
                <p>
                    {Content["p7"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T3F3.gif"} className='unit-image' alt="Celdas de los controles"/>
                </div>
                <p>
                    {Content["p8"][0]}
                    <i>{Content["p8"][1]}</i>
                    {Content["p8"][2]}
                    <i>{Content["p8"][3]}</i>
                    {Content["p8"][4]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T3F4.jpg"} className='unit-image' alt="Macro ingresar"/>
                </div>
                <p>
                    {Content["p9"]}
                </p>
                <p>
                    {Content["p10"][0]}
                    <i>{Content["p10"][1]}</i>
                    {Content["p10"][2]}
                    <i>{Content["p10"][3]}</i>
                    {Content["p10"][4]}
                </p>
                <p>
                    {Content["p10"][0]}
                    <i>{Content["p11"][1]}</i>
                    {Content["p11"][2]}
                    <i>{Content["p11"][3]}</i>
                    {Content["p11"][4]}
                    <i>{Content["p11"][5]}</i>
                    {Content["p11"][6]}
                </p>
                <p>
                    {Content["p12"]}
                </p>
                <p>
                    {Content["p13"][0]}
                    <i>{Content["p13"][1]}</i>
                    {Content["p13"][2]}
                </p>
                <YoutubeLink embedId="BvZ1wjnwgzA"/>
                <p></p>
                <YoutubeLink embedId="X5fbuOTOfDI"/>
                <p></p>
                <YoutubeLink embedId="toAsZ_OPDGw"/>
                <p></p>
                <YoutubeLink embedId="FCyBVSHfiaQ"/>
                <p></p>
                <YoutubeLink embedId="RF7heLIEnis"/>
            </div>
        </div>
    );
}

export default EjemploDeUso;