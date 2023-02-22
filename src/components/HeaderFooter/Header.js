import React from 'react';
import MenuBar from '../Menu/MenuBar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './headerfooter.css';

const Header = (props) => {
    const handleDyslexia = () => {
        props.setDys(!props.dys);
    }

    return (
        <div className='header'>
            <div className='header-container'>
                <MenuBar position="header"/>
                <div className='header-space'>
                    <div className='header-title-pc'>
                        <a href='/' className='header-logo-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='header-logo' viewBox="0 0 640 512">
                                <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 
                                        192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 
                                        58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 
                                        22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31
                                        11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 
                                        416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 
                                        16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 
                                        0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z">
                                </path>
                            </svg>
                        </a>
                        <div className='header-title-container'>
                            <span>INF-130 Programación y tratamiento de datos para la gestión</span>
                        </div>
                    </div>
                    <div className='flex align-center'>
                        <span>Dislexia</span>
                        <Switch label="OpenDyslexic" checked={props.dys} onChange={handleDyslexia} color="default"/>
                    </div>
                </div>
                <div className='header-title-cel'>
                    <div className="header-title-cel-sub">
                        <a href='/' className='header-logo-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='header-logo' viewBox="0 0 640 512">
                                <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 
                                        192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 
                                        58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 
                                        22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31
                                        11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 
                                        416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 
                                        16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 
                                        0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <div className='header-title-container'>
                            <span>INF-130</span>
                        </div>
                        <div className='header-title-container'>
                            <span>Programación y tratamiento de datos para la gestión</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
