import React, {useContext} from 'react';
import '../../units.css';
import { ModeContext } from '../../../../App';
import Content from '../../../../ContentJSON/U1/6FormatoCondicional.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const FormatoCondicional = () => {

    const night = useContext(ModeContext);

    return (
        <div id='u1-formatocondicional'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-FormatoCondicional.xlsx' className={ night ? "download-file color-white" : "download-file"} download>
                    
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
                    <i>{Content["p1"][3]}</i>
                    {Content["p1"][4]}
                    <i>{Content["p1"][5]}</i>
                    {Content["p1"][6]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T6F1.jpg"} className='unit-image' alt="Pestaña formato condicional"/>
                </div>
                <p>
                    {Content["p2"][0]}
                    <i>{Content["p2"][1]}</i>
                    {Content["p2"][2]}
                    <i>{Content["p2"][3]}</i>
                    {Content["p2"][4]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T6F2.jpg"} className='unit-image' alt="Barras de color"/>
                </div>
                <p>
                    {Content["p3"][0]}
                    <i>{Content["p3"][1]}</i>
                    {Content["p3"][2]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T6F3.jpg"} className='unit-image' alt="Más reglas"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T6F4.gif"} className='unit-image' alt="Ejemplo formato condicional"/>
                </div>
                <p>
                    {Content["p5"][0]}
                    <i>{Content["p5"][1]}</i>
                    {Content["p5"][2]}
                    <i>{Content["p5"][3]}</i>
                    {Content["p5"][4]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T6F5.jpg"} className='unit-image' alt="Administrar reglas"/>
                </div>
                <YoutubeLink embedId="aiPhBpMfFBM"/>
            </div>
        </div>
    );
}

export default FormatoCondicional;