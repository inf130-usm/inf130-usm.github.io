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
                    <b style={{color:'red'}}>{Content["p3"][5]}</b>
                    {Content["p3"][6]}
                    <b style={{color:'green'}}>{Content["p3"][7]}</b>
                    {Content["p3"][8]}
                    <b style={{color:'blue'}}>{Content["p3"][9]}</b>
                    {Content["p3"][10]}
                    <b style={{color:'green'}}>{Content["p3"][11]}</b>
                    {Content["p3"][12]}
                    <b style={{color:'red'}}>{Content["p3"][13]}</b>
                    {Content["p3"][14]}
                </p>
                <YoutubeLink embedId="2YXBPMnvAgg"/>
                <p>
                    {Content["p4"][0]}
                    <i>{Content["p4"][1]}</i>
                    {Content["p4"][2]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U4T1F2.png"} className='unit-image' alt="Ejemplo de una Function"/>
                </div>
                <p>
                    {Content["p5"][0]}
                    <i>{Content["p5"][1]}</i>
                    {Content["p5"][2]}
                    <i>{Content["p5"][3]}</i>
                    {Content["p5"][4]}
                </p>
                <YoutubeLink embedId="CdCWa3a2_Ss"/>
                <p>
                {Content["p6"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U4T1F3.gif"} className='unit-image' alt="Modo de uso de Functions"/>
                </div>
                <p>
                {Content["p7"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U4T1F4.png"} className='unit-image' alt="Modo de uso de Functions en subrutinas"/>
                </div>
                <p>
                    {Content["p8"][0]}
                    <i>{Content["p8"][1]}</i>
                    {Content["p8"][2]}
                    <i>{Content["p8"][3]}</i>
                    {Content["p8"][4]}
                    <i>{Content["p8"][5]}</i>
                    {Content["p8"][6]}
                    <i>{Content["p8"][7]}</i>
                    {Content["p8"][8]}
                    <i>{Content["p8"][9]}</i>
                    {Content["p8"][10]}
                </p>
                <YoutubeLink embedId="Rw68DE49FRg"/>
            </div>
        </div>
    );
}

export default Teoria;