import React from 'react';
import Content from '../../../../ContentJSON/U4/1Teoria.json';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Teoria = () => {
    return (
        <div id='u4-teoria'>
            <div className='unit-subtitle'>
                <label>
                    {Content["p0"]}
                </label>
            </div>
            <div className='unit-content'>
                <p>
                {Content["p1.1"]}<i>{Content["p1.2"]}</i>{Content["p1.3"]}
                </p> 
                <p>
                {Content["p2"]}
                </p>
                <div className="unit-image">
                    <img src={"/images/U4T1F1.png"} className='unit-image' alt="Sintáxis del procedimiento Function"/>
                </div>
                <p>
                    {Content["p3.1"]}
                    <b style={{color:'red'}}>{Content["p3.2"]}</b>
                    {Content["p3.3"]}
                    <b style={{color:'blue'}}>{Content["p3.4"]}</b>
                    {Content["p3.5"]}
                    <b style={{color:'red'}}>{Content["p3.6"]}</b>
                    {Content["p3.7"]}
                    <b style={{color:'green'}}>{Content["p3.8"]}</b>
                    {Content["p3.9"]}
                    <b style={{color:'blue'}}>{Content["p3.10"]}</b>
                    {Content["p3.11"]}
                    <b style={{color:'green'}}>{Content["p3.12"]}</b>
                    {Content["p3.13"]}
                    <b style={{color:'red'}}>{Content["p3.14"]}</b>
                    {Content["p3.15"]}
                </p>
                <YoutubeLink embedId="2YXBPMnvAgg"/>
                <p>
                {Content["p4.1"]}<i>{Content["p4.2"]}</i>{Content["p4.3"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U4T1F2.png"} className='unit-image' alt="Ejemplo de una Function"/>
                </div>
                <p>
                {Content["p5.1"]}
                <i>{Content["p5.2"]}</i>
                {Content["p5.3"]}
                <i>{Content["p5.4"]}</i>
                {Content["p5.5"]}
                </p>
                <YoutubeLink embedId="CdCWa3a2_Ss"/>
                <p>
                {Content["p6"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U4T1F3.png"} className='unit-image' alt="Modo de uso de Functions"/>
                </div>
                <p>
                {Content["p7"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U4T1F4.png"} className='unit-image' alt="Modo de uso de Functions en subrutinas"/>
                </div>
                <p>
                {Content["p8.1"]}
                <i>{Content["p8.2"]}</i>
                {Content["p8.3"]}
                <i>{Content["p8.4"]}</i>
                {Content["p8.5"]}
                <i>{Content["p8.6"]}</i>
                {Content["p8.7"]}
                <i>{Content["p8.8"]}</i>
                {Content["p8.9"]}
                <i>{Content["p8.10"]}</i>
                {Content["p8.11"]}
                </p>
                <YoutubeLink embedId="Rw68DE49FRg"/>
            </div>
        </div>
    );
}

export default Teoria;