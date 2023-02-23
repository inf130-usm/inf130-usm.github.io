import React, {useContext} from 'react';
import { ModeContext } from '../../../../App';
import Content from '../../../../ContentJSON/U3/2Subrutinas.json';
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Subrutinas = () => {
    const night = useContext(ModeContext);

    return (
        <div id='u3-subrutinas'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U3-Subrutinas.xlsm' className={ night ? "download-file color-white" : "download-file"} download>
                    
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
                <div className="unit-image3">
                    <img src={"/images/U3T2F1.jpg"} className='unit-image' alt="Sintaxis subrutina"/>
                </div>
                <p>
                    {Content["p2"][0]}
                    <b style={{color:'red'}}>{Content["p2"][1]}</b>
                    {Content["p2"][2]}
                    <b style={{color:'red'}}>{Content["p2"][3]}</b>
                    {Content["p2"][4]}
                </p>
                <p>
                    {Content["p3"][0]}
                    <i>{Content["p3"][1]}</i>
                    {Content["p3"][2]}
                    <i>{Content["p3"][3]}</i>
                    {Content["p3"][4]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T2F2.jpg"} className='unit-image' alt="Herramienta Visual Basic"/>
                </div>
                    {Content["p4"][0]}
                    <i>{Content["p4"][1]}</i>
                    {Content["p4"][2]}
                    <i>{Content["p4"][3]}</i>
                    {Content["p4"][4]}
                <div className="unit-image3">
                    <img src={"/images/U3T2F3.jpg"} className='unit-image' alt="Insertar módulo"/>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T2F4.jpg"} className='unit-image' alt="Asignar valor"/>
                </div>
                <p>
                    {Content["p6"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T2F5.jpg"} className='unit-image' alt="Primera subrutina"/>
                </div>
                <p>
                    {Content["p7"][0]}
                    <i>{Content["p7"][1]}</i>
                    {Content["p7"][2]}
                    <i>{Content["p7"][3]}</i>
                    {Content["p7"][4]}
                </p>
                <p>
                    {Content["p8"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T2F6.gif"} className='unit-image' alt="Resultado primera subrutina"/>
                </div>
                <p>
                    <b style={{color:'red'}}><u>{Content["p9"][0]}</u></b>
                    {Content["p9"][1]}
                    <i>{Content["p9"][2]}</i>
                    {Content["p9"][3]}
                </p>
                <p>
                    <b style={{color:'green'}}><u>{Content["p10"][0]}</u></b>
                    {Content["p10"][1]}
                </p>
                <YoutubeLink embedId="_TD5CMyPbRY"/>
                <p></p>
                <YoutubeLink embedId="em5Pu_8hq5s"/>
            </div>
        </div>
    );
}

export default Subrutinas;