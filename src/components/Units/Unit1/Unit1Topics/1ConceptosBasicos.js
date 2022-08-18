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
                {/*
                Arrastrar y Completar
                Rango
                */}
                <p>
                {Content["p1"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U1T1F1.jpg"} className='unit-image' alt="Nuevo archivo de Excel"/>
                </div>
                <p>
                {Content["p2"]}
                </p>
                <p><b>Entorno de Excel</b></p>
                <div className="unit-image2">
                    <img src={"/images/U1T1F2.jpg"} className='unit-image' alt="Entorno de trabajo Excel"/>
                </div>
                <p>
                    <b style={{color:'gray'}}>Pestañas: </b>{Content["p3"]}<br/>
                    <b style={{color:'black'}}>Celdas: </b>{Content["p4"]}<br/>
                    <b style={{color:'orange'}}>Barra de formulas: </b>{Content["p5"]}<br/>
                    <b style={{color:'green'}}>Filas: </b>{Content["p6"]}<br/>
                    <b style={{color:'purple'}}>Columnas: </b>{Content["p7"]}<br/>
                    <b style={{color:'royalblue'}}>Propiedades de celda: </b>{Content["p8"]}<br/>
                    <b style={{color:'red'}}>Hojas: </b>{Content["p9"]}<br/>
                </p>
                <p><b>Rango y arrastrar</b></p>
                <p>
                {Content["p10"]}
                </p>
                <p>
                {Content["p11"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U1T1F3.jpg"} className='unit-image' alt="Cuadro para arrastrar"/>
                </div>
                <p>
                {Content["p12"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U1T1F4.gif"} className='unit-image' alt="Arrastre genérico"/>
                </div>
                <p>
                {Content["p13"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U1T1F5.gif"} className='unit-image' alt="Arrastre de cuenta"/>
                </div>
                <p>
                {Content["p14"]}
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