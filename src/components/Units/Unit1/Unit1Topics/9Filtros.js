import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/9Filtros.json';
import YoutubeLink from "../../../YouTubeLink";

const Filtros = () => {
    return (
        <div id='u1-filtros'>
            <div className='unit-subtitle'>
                <label>
                    {Content["p0"]}
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T9F1.jpg"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p2"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F2.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T9F3.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T9F4.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    <b>{Content["p5"]}</b>
                </p>
                <p>
                    {Content["p6"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T9F5.jpg"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p7"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F6.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p8"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F7.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p9"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T9F8.gif"} className='unit-image' alt="Filtros"/>
                </div>
                <p>
                    {Content["p10"]}
                </p>
                <p>
                    <b style={{color:'red'}}><u>{Content["p11.1"]}</u></b>{Content["p11.2"]}
                </p>
                <YoutubeLink embedId="RBQIaRFoh44"/>
                <p></p>
                <YoutubeLink embedId="SK56MSvvYZk"/>
                <p></p>
                <YoutubeLink embedId="CA-gxUXWPhM"/>
            </div>
        </div>
    );
}

export default Filtros;