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
                    {Content["p1"]}
                </p>
                <p>
                    {Content["p2"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T3F1.gif"} className='unit-image' alt="Hojas del Ejemplo"/>
                </div>
                <p>
                    <b>{Content["p3"]}</b>{Content["p4"]}
                </p>
                <p>
                    <b>{Content["p5"]}</b>{Content["p6"]}
                </p>
                <p>
                    <b>{Content["p7"]}</b>{Content["p8"]}
                </p>
                <YoutubeLink embedId=""/>
            </div>
        </div>
    );
}

export default EjemploDeUso;