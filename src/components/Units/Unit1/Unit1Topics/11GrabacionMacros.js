import React, {useContext} from 'react';
import '../../units.css';
import { ModeContext } from '../../../../App';
import Content from '../../../../ContentJSON/U1/11GrabacionMacros.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const TablasDinamicas = () => {
    const night = useContext(ModeContext);

    return (
        <div id='u1-tablasdinamicas'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-GrabacionMacros.xlsm' className={ night ? "download-file color-white" : "download-file"} download>
                    
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
                    {Content["p2"][0]}
                    <i>{Content["p2"][1]}</i>
                    {Content["p2"][2]}
                    <i>{Content["p2"][3]}</i>
                    {Content["p2"][4]}
                </p>
                <p>
                    {Content["p3"][0]}
                    <i>{Content["p3"][1]}</i>
                    {Content["p3"][2]}
                    <i>{Content["p3"][3]}</i>
                    {Content["p3"][4]}
                </p>
                <p>
                    {Content["p4"][0]}
                    <i>{Content["p4"][1]}</i>
                    {Content["p4"][2]}
                    <i>{Content["p4"][3]}</i>
                    {Content["p4"][4]}
                    <i>{Content["p4"][5]}</i>
                    {Content["p4"][6]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T11F1.jpg"} className='unit-image' alt="Pestaña programador"/>
                </div>
                <p>
                    {Content["p5"][0]}
                    <i>{Content["p5"][1]}</i>
                    {Content["p5"][2]}  
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T11F2.gif"} className='unit-image' alt="Herramienta Grabar macro"/>
                </div>
                <p>
                    {Content["p6"][0]}
                    <i>{Content["p6"][1]}</i>
                    {Content["p6"][2]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T11F3.gif"} className='unit-image' alt="Grabar macro"/>
                </div>
                <p>
                    {Content["p7"][0]}
                    <i>{Content["p7"][1]}</i>
                    {Content["p7"][2]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T11F4.gif"} className='unit-image' alt="Ejecutar macro"/>
                </div>
                <p>
                    {Content["p8"][0]}
                    <i>{Content["p8"][1]}</i>
                    {Content["p8"][2]}
                    <i>{Content["p8"][3]}</i>
                    {Content["p8"][4]}
                    <i>{Content["p8"][5]}</i>
                    {Content["p8"][6]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T11F5.gif"} className='unit-image' alt="Modificar macro"/>
                </div>
                <p>
                    {Content["p9"]}
                </p>
                <p>
                    <b style={{color:'red'}}><u>{Content["p10"][0]}</u></b>
                    {Content["p10"][1]}
                    <b><i>{Content["p10"][2]}</i></b>
                    {Content["p10"][3]}
                    <i>{Content["p10"][4]}</i>
                    {Content["p10"][5]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T11F6.jpg"} className='unit-image' alt="Formato .xlsm"/>
                </div>
                <p>
                    <b style={{color:'red'}}><u>{Content["p11"][0]}</u></b>
                    {Content["p11"][1]}
                    <b><i>{Content["p11"][2]}</i></b>
                    {Content["p11"][3]}
                </p>
                <YoutubeLink embedId="goWWDXvV584"/>
                <p></p>
                <YoutubeLink embedId="SL7jlYefLs0"/>
            </div>
        </div>
    );
}

export default TablasDinamicas;