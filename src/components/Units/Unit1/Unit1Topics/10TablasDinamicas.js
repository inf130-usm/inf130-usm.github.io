import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/10TablasDinamicas.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const TablasDinamicas = () => {
    return (
        <div id='u1-tablasdinamicas'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-TablasDinamicas.xlsx' className="download-file" download>
                    
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
                <div className='unit-image3'>
                    <img src={"/images/U1T10F1.jpg"} className='unit-image' alt="Tablas Dinámicas"/>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T10F2.jpg"} className='unit-image' alt="Desde una tabla o rango"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T10F3.gif"} className='unit-image' alt="Crear tabla dinámica"/>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T10F4.jpg"} className='unit-image' alt="Secciones de tabla dinámica"/>
                </div>
                <p>
                    {Content["p6"]}
                </p>
                <p>
                    <b>{Content["p7"]}</b>{Content["p8"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T10F5.gif"} className='unit-image' alt="Campo filas"/>
                </div>
                <p>
                    <b>{Content["p9"]}</b>{Content["p10"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T10F6.gif"} className='unit-image' alt="Campo valores"/>
                    <img src={"/images/U1T10F7.gif"} className='unit-image' alt="Configuración campo valor"/>
                </div>
                <p>
                    <b>{Content["p11"]}</b>{Content["p12"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T10F8.gif"} className='unit-image' alt="Campo columnas"/>
                </div>
                <p>
                    <b>{Content["p13"]}</b>{Content["p14"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T10F9.gif"} className='unit-image' alt="Campo filtros"/>
                </div>
                <p>
                    {Content["p15"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T10F10.gif"} className='unit-image' alt="Gráficos dinámicos"/>
                </div>
                <YoutubeLink embedId="pPkqR5xw48g"/>
                <p></p>
                <YoutubeLink embedId="k6_4rPGBVQg"/>
                <p></p>
                <YoutubeLink embedId="iSWRaY4hBf0"/>
            </div>
        </div>
    );
}

export default TablasDinamicas;