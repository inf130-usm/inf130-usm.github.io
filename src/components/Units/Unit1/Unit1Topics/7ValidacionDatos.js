import React, {useContext} from 'react';
import '../../units.css';
import { ModeContext } from '../../../../App';
import Content from '../../../../ContentJSON/U1/7ValidacionDatos.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const ValidacionDatos = () => {
    const night = useContext(ModeContext);

    return (
        <div id='u1-validaciondatos'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-ValidacionDatos.xlsx' className={ night ? "download-file color-white" : "download-file"} download>
                    
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
                    {Content["p2"][0]}
                    <i>{Content["p2"][1]}</i>
                    {Content["p2"][2]}
                    <i>{Content["p2"][3]}</i>
                    {Content["p2"][4]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F1.jpg"} className='unit-image' alt="Validación de datos"/>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F2.jpg"} className='unit-image' alt="Ventana validación de datos"/>
                </div>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F3.jpg"} className='unit-image3' alt="Criterios de validación"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F4.jpg"} className='unit-image' alt="Validación de lista"/>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T7F5.jpg"} className='unit-image' alt="Mensaje de entrada"/>
                </div>
                <p>
                    {Content["p6"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T7F6.jpg"} className='unit-image' alt="Mensaje de error"/>
                </div>
                <p>
                    {Content["p7"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T7F7.gif"} className='unit-image' alt="Ejemplo de validacion de datos"/>
                </div>
                <p>
                    {Content["p8"]}
                </p>
                <YoutubeLink embedId="aiPhBpMfFBM"/>
            </div>
        </div>
    );
}

export default ValidacionDatos;