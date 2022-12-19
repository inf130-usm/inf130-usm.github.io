import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/1ConceptosBasicos.json';
import YoutubeLink from "../../../YouTubeLink";

const ConceptosBasicos = () => {
    return (
        <div id='u1-conceptosbasicos'>
            <div className='unit-subtitle'>
                <label>
                    {Content["p0"]}
                </label>
            </div>
            <div className='unit-content'>
                <p>
                {Content["p1"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U1T1F1.jpg"} className='unit-image' alt="Nuevo archivo de Excel"/>
                </div>
                <p>
                    {Content["p2"][0]}
                    <i>{Content["p2"][1]}</i>
                    {Content["p2"][2]}
                </p>
                <p><b>{Content["p3"]}</b></p>
                <div className="unit-image2">
                    <img src={"/images/U1T1F2.jpg"} className='unit-image' alt="Entorno de trabajo Excel"/>
                </div>
                <p>
                    <b style={{color:'gray'}}>{Content["p4"][0]}</b>
                    {Content["p4"][1]}
                    <i>{Content["p4"][2]}</i>
                    {Content["p4"][3]}
                    <i>{Content["p4"][4]}</i>
                    {Content["p4"][5]}
                </p>
                <p>
                    <b style={{color:'black'}}>{Content["p5"][0]}</b>
                    {Content["p5"][1]}
                </p>
                <p>
                    <b style={{color:'orange'}}>{Content["p6"][0]}</b>
                    {Content["p6"][1]}
                    <i>{Content["p6"][2]}</i>
                    {Content["p6"][3]}
                </p>
                <p>
                    <b style={{color:'green'}}>{Content["p7"][0]}</b>
                    {Content["p7"][1]}
                </p>
                <p>
                    <b style={{color:'purple'}}>{Content["p8"][0]}</b>
                    {Content["p8"][1]}
                </p>
                <p>
                    <b style={{color:'royalblue'}}>{Content["p9"][0]}</b>
                    {Content["p9"][1]}
                </p>
                <p>
                    <b style={{color:'red'}}>{Content["p10"][0]}</b>
                    {Content["p10"][1]}
                    <i>{Content["p10"][2]}</i>
                    {Content["p10"][3]}
                </p>
                <p><b>{Content["p11"]}</b></p>
                <p>
                    {Content["p12"][0]}
                    <i>{Content["p12"][1]}</i>
                    {Content["p12"][2]}
                </p>
                <p>
                {Content["p13"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U1T1F3.jpg"} className='unit-image' alt="Cuadro para arrastrar"/>
                </div>
                <p>
                {Content["p14"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U1T1F4.gif"} className='unit-image' alt="Arrastre genérico"/>
                </div>
                <p>
                {Content["p15"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U1T1F5.gif"} className='unit-image' alt="Arrastre de cuenta"/>
                </div>
                <p>
                {Content["p16"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U1T1F6.gif"} className='unit-image' alt="Arrastre de lista"/>
                </div>
                <YoutubeLink embedId="7kxbkNSJ-bw"/>
                <p></p>
                <YoutubeLink embedId="GVuxDNlMzl0"/>
            </div>
        </div>
    );
}

export default ConceptosBasicos;