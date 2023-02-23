import React, { useContext } from 'react';
import Content from '../../../../ContentJSON/U3/5If.json';
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';
import { ModeContext } from '../../../../App';

const EstructuraCondicional = () => {
    const night = useContext(ModeContext);

    return (
        <div id='u3-Estructuracondicional'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U3-If.xlsm' className={ night ? "download-file color-white" : "download-file"} download>
                    
                    <IconContext.Provider value={{ className: 'excel-icon' }}>
                        <RiFileExcel2Fill/>
                    </IconContext.Provider> 
                    <label className='right-align excel-text'>&nbsp;Descargar archivo</label>
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
                    <i>{Content["p2"][3]}</i>
                    {Content["p2"][4]}
                    <i>{Content["p2"][5]}</i>
                    {Content["p2"][6]}
                </p>
                <p>
                    <b>{Content["p3"]}</b>
                </p>
                <p>
                    {Content["p4"][0]}
                    <i>{Content["p4"][1]}</i>
                    {Content["p4"][2]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F1.jpg"} className='unit-image' alt="Sintaxis If simple"/>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T5F2.jpg"} className='unit-image' alt="Diagrama If simple"/>
                </div>
                <YoutubeLink embedId="SiG-gYZbGac"/>
                <p><b>{Content["p6"]}</b></p>
                <p>
                    {Content["p7"][0]}
                    <i>{Content["p7"][1]}</i>
                    {Content["p7"][2]}
                    <i>{Content["p7"][3]}</i>
                    {Content["p7"][4]}
                    <i>{Content["p7"][5]}</i>
                    {Content["p7"][6]}
                    <i>{Content["p7"][7]}</i>
                    {Content["p7"][8]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F3.jpg"} className='unit-image' alt="Sintaxis If doble"/>
                </div>
                <p>
                    {Content["p8"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T5F4.jpg"} className='unit-image' alt="Diagrama If doble"/>
                </div>
                <YoutubeLink embedId="9tGtxAE7CA0"/>
                <p>
                    <b>{Content["p9"]}</b>
                </p>
                <p>
                    {Content["p10"][0]}
                    <i>{Content["p10"][1]}</i>
                    {Content["p10"][2]}
                    <i>{Content["p10"][3]}</i>
                    {Content["p10"][4]}
                    <i>{Content["p10"][5]}</i>
                    {Content["p10"][6]}
                    <i>{Content["p10"][7]}</i>
                    {Content["p10"][8]}
                </p>
                <p>
                    {Content["p11"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F5.jpg"} className='unit-image' alt="Sintaxis If multiple"/>
                </div>
                <p>
                    {Content["p12"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F6.jpg"} className='unit-image' alt="Sintaxis If ElseIf"/>
                </div>
                <div className="unit-image2">
                    <img src={"/images/U3T5F7.jpg"} className='unit-image' alt="Diagrama If multiple"/>
                </div>
                <YoutubeLink embedId="CO4iWyA84Yk"/>
                <p>
                    {Content["p13"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F8.jpg"} className='unit-image' alt="Codigo If"/>
                </div>
                <div className="unit-image2">
                    <img src={"/images/U3T5F9.gif"} className='unit-image' alt="Resultado subrutina If"/>
                </div>                
            </div>
        </div>
    );
}

export default EstructuraCondicional;