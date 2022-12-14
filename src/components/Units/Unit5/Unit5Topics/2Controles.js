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
                    {Content["p3"][0]}
                    <i>{Content["p3"][1]}</i>
                    {Content["p3"][2]}
                    <i>{Content["p3"][3]}</i>
                    {Content["p3"][4]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U5T2F1.gif"} className='unit-image' alt="Insertar control de formulario"/>
                </div>
                <p>
                    <b>{Content["p4"]}</b>
                </p>
                <p>
                    {Content["p5"][0]}
                    <i>{Content["p5"][1]}</i>
                    {Content["p5"][2]}
                    <i>{Content["p5"][3]}</i>
                    {Content["p5"][4]}
                </p>
                <p>
                    <b>{Content["p6"][0]}</b>
                    {Content["p6"][1]}
                </p>
                <p>
                    <b>{Content["p7"][0]}</b>
                    {Content["p7"][1]}
                </p>
                <p>
                    <b>{Content["p8"][0]}</b>
                    {Content["p8"][1]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F2.gif"} className='unit-image' alt="Cuadro combinado"/>
                </div>
                <p>
                    <b>{Content["p9"]}</b>
                </p>
                <p>
                    {Content["p10"][0]}
                    <i>{Content["p10"][1]}</i>
                    {Content["p10"][2]}
                    <i>{Content["p10"][3]}</i>
                    {Content["p10"][4]}
                </p>
                <p>
                    {Content["p11"][0]}
                    <i>{Content["p11"][1]}</i>
                    {Content["p11"][2]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F3.gif"} className='unit-image' alt="Cuadro de lista"/>
                </div>
                <p>
                    <b>{Content["p12"]}</b>
                </p>
                <p>
                    {Content["p13"][0]}
                    <i>{Content["p13"][1]}</i> 
                    {Content["p13"][2]}
                </p>
                <p>
                    <b>{Content["p14"][0]}</b>
                    {Content["p14"][1]}
                </p>
                <p>
                    <b>{Content["p15"][0]}</b>
                    {Content["p15"][1]}
                </p>
                <p>
                    <b>{Content["p16"][0]}</b>
                    {Content["p16"][1]}
                </p>
                <p>
                    <b>{Content["p17"][0]}</b>
                    {Content["p17"][1]}
                </p>
                <p>
                    <b>{Content["p18"][0]}</b>
                    {Content["p18"][1]}
                </p>
                <p>
                    <b>{Content["p19"][0]}</b>
                    {Content["p19"][1]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F4.gif"} className='unit-image' alt="Control de número"/>
                </div>
                <p>
                    <b>{Content["p20"]}</b>
                </p>
                <p>
                    {Content["p21"][0]}
                    <i>{Content["p21"][1]}</i>
                    {Content["p21"][2]}
                    <i>{Content["p21"][3]}</i>
                    {Content["p21"][4]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F5.gif"} className='unit-image' alt="Botón de opción"/>
                </div>
                <p>
                    {Content["p22"][0]}
                    <i>{Content["p22"][1]}</i>
                    {Content["p22"][2]}
                    <i>{Content["p22"][3]}</i>
                    {Content["p22"][4]}
                    <i>{Content["p22"][5]}</i>
                    {Content["p22"][6]}
                    <i>{Content["p22"][7]}</i>
                    {Content["p22"][8]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F6.gif"} className='unit-image' alt="Grupo de opción"/>
                </div>
                <p>
                    <b>{Content["p23"]}</b>
                </p>
                <p>
                    {Content["p24"][0]}
                    <i>{Content["p24"][1]}</i>
                    {Content["p24"][2]}
                    <i>{Content["p24"][3]}</i>
                    {Content["p24"][4]}
                </p>
                <p>
                    {Content["p25"][0]}
                    <i>{Content["p25"][1]}</i>
                    {Content["p25"][2]}
                    <i>{Content["p25"][3]}</i>
                    {Content["p25"][4]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F7.gif"} className='unit-image' alt="Casilla"/>
                </div>
                <p>
                    <b>{Content["p26"]}</b>
                </p>
                <p>
                    {Content["p27"][0]}
                    <i>{Content["p27"][1]}</i>
                    {Content["p27"][2]}
                    <i>{Content["p27"][3]}</i>
                    {Content["p27"][4]}
                    <i>{Content["p27"][5]}</i>
                    {Content["p27"][6]}
                    <i>{Content["p27"][7]}</i>
                    {Content["p27"][8]}
                    <i>{Content["p27"][9]}</i>
                    {Content["p27"][10]}
                    
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U5T2F8.gif"} className='unit-image' alt="Botón"/>
                </div>
                <YoutubeLink embedId="b7iM9gQbqk4"/>
            </div>
        </div>
    );
}

export default Controles;