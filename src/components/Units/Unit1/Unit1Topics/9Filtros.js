import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/9Filtros.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Filtros = () => {
    return (
        <div id='u1-filtros'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-Filtros.xlsx' className="download-file" download>
                    
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
                    <img src={"/images/U1T9F1.jpg"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p2"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F2.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T9F3.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T9F4.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    <b>{Content["p5"]}</b>
                </p>
                <p>
                    {Content["p6"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T9F5.jpg"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p7"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F6.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p8"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F7.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p9"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F8.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p10"]}
                </p>
                <p>
                    <b style={{color:'red'}}><u>{Content["p11.1"]}</u></b>{Content["p11.2"]}
                </p>
                <YoutubeLink embedId="RBQIaRFoh44"/>
                <p></p>
                <YoutubeLink embedId="SK56MSvvYZk"/>
                <p></p>
                <YoutubeLink embedId="CA-gxUXWPhM"/>
            </div>
        </div>
    );
}

export default Filtros;