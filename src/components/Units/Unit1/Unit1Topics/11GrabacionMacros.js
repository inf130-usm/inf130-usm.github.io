import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/11GrabacionMacros.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const TablasDinamicas = () => {
    return (
        <div id='u1-tablasdinamicas'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-GrabacionMacros.xlsx' className="download-file" download>
                    
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
                <YoutubeLink embedId="goWWDXvV584"/>
                <p></p>
                <YoutubeLink embedId="SL7jlYefLs0"/>
            </div>
        </div>
    );
}

export default TablasDinamicas;