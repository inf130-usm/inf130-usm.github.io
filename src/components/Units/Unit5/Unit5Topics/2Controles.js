import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U5/2Controles.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Controles = () => {
    return (
        <div id='u5-teoria'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U5-Controles.xlsx' className="download-file" download>
                    
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
                <p>
                    {Content["p2"]}
                </p>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U5T2F1.gif"} className='unit-image' alt="Insertar control de formulario"/>
                </div>
                <p>
                    <b>{Content["p4"]}</b>
                </p>
                <p>
                    {Content["p5"]}
                </p>
                <p>
                    <b>{Content["p6"]}</b>{Content["p7"]}
                </p>
                <p>
                    <b>{Content["p8"]}</b>{Content["p9"]}
                </p>
                <p>
                    <b>{Content["p10"]}</b>{Content["p11"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F2.gif"} className='unit-image' alt="Cuadro combinado"/>
                </div>
                <p>
                    <b>{Content["p12"]}</b>
                </p>
                <p>
                    {Content["p13"]}
                </p>
                <p>
                    {Content["p14"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F3.gif"} className='unit-image' alt="Cuadro de lista"/>
                </div>
                <p>
                    <b>{Content["p15"]}</b>
                </p>
                <p>
                    {Content["p16"]}
                </p>
                <p>
                    <b>{Content["p17"]}</b>{Content["p18"]}
                </p>
                <p>
                    <b>{Content["p19"]}</b>{Content["p20"]}
                </p>
                <p>
                    <b>{Content["p21"]}</b>{Content["p22"]}
                </p>
                <p>
                    <b>{Content["p23"]}</b>{Content["p24"]}
                </p>
                <p>
                    <b>{Content["p25"]}</b>{Content["p26"]}
                </p>
                <p>
                    <b>{Content["p27"]}</b>{Content["p28"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F4.gif"} className='unit-image' alt="Control de número"/>
                </div>
                <p>
                    <b>{Content["p29"]}</b>
                </p>
                <p>
                    {Content["p30"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F5.gif"} className='unit-image' alt="Botón de opción"/>
                </div>
                <p>
                    {Content["p31"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F6.gif"} className='unit-image' alt="Grupo de opción"/>
                </div>
                <p>
                    <b>{Content["p32"]}</b>
                </p>
                <p>
                    {Content["p33"]}
                </p>
                <p>
                    {Content["p34"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F7.gif"} className='unit-image' alt="Casilla"/>
                </div>
                <p>
                    <b>{Content["p35"]}</b>
                </p>
                <p>
                    {Content["p36"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F8.gif"} className='unit-image' alt="Botón"/>
                </div>
                <YoutubeLink embedId=""/>
            </div>
        </div>
    );
}

export default Controles;