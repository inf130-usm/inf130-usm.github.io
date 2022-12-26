import React from 'react';
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import Content from '../../../../ContentJSON/U4/1Teoria.json';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Teoria = () => {
    return (
        <div id='u4-teoria'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U4-Teoria.xlsm' className="download-file" download>
                    
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
                <div className="unit-image">
                    <img src={"/images/U4T1F1.png"} className='unit-image' alt="Sintáxis del procedimiento Function"/>
                </div>
                <p>
                    {Content["p3"][0]}
                    <b style={{color:'red'}}>{Content["p3"][1]}</b>
                    {Content["p3"][2]}
                    <b style={{color:'blue'}}>{Content["p3"][3]}</b>
                    {Content["p3"][4]}
                </p>
                <p>
                    {Content["p4"][0]}
                    <b style={{color:'red'}}>{Content["p4"][1]}</b>
                    {Content["p4"][2]}
                    <b style={{color:'green'}}>{Content["p4"][3]}</b>
                    {Content["p4"][4]}
                </p>
                <p>
                    {Content["p5"][0]}
                    <b style={{color:'blue'}}>{Content["p5"][1]}</b>
                    {Content["p5"][2]}
                    <b style={{color:'green'}}>{Content["p5"][3]}</b>
                    {Content["p5"][4]}
                    <b style={{color:'red'}}>{Content["p5"][5]}</b>
                    {Content["p5"][6]}
                </p>
                <YoutubeLink embedId="2YXBPMnvAgg"/>
                <p>
                    {Content["p6"][0]}
                    <i>{Content["p6"][1]}</i>
                    {Content["p6"][2]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U4T1F2.png"} className='unit-image' alt="Ejemplo de una Function"/>
                </div>
                <p>
                    {Content["p7"][0]}
                    <i>{Content["p7"][1]}</i>
                    {Content["p7"][2]}
                    <i>{Content["p7"][3]}</i>
                    {Content["p7"][4]}
                </p>
                <YoutubeLink embedId="CdCWa3a2_Ss"/>
                <p>
                {Content["p8"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U4T1F3.gif"} className='unit-image' alt="Modo de uso de Functions"/>
                </div>
                <p>
                {Content["p9"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U4T1F4.png"} className='unit-image' alt="Modo de uso de Functions en subrutinas"/>
                </div>
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
                    <i>{Content["p10"][9]}</i>
                    {Content["p10"][10]}
                </p>
                <YoutubeLink embedId="Rw68DE49FRg"/>
            </div>
        </div>
    );
}

export default Teoria;