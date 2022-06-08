import React from 'react';
import './menutopics.css'

const Menu = () => {
    const url = window.location.pathname;

    return (
        <div className='menu'>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', marginRight: '5px', backgroundColor: 'black'}} />
                <div>
                    <label className='menu-list-title'>
                        Unidades
                    </label>
                </div>
                <div style={{flex: 1, height: '1px', marginLeft: '5px', backgroundColor: 'black'}} />
            </div>
            <ul className='menutopics-list'>
                <li>
                    <a href="/" className='menu-list-item'>Inicio</a>
                </li>
                <li>
                    <a href="/unidad1/conceptos-basicos" className={url.includes("unidad1") ? "menu-list-item bold" : "menu-list-item"}>Unidad 1: Excel</a>
                </li>
                <li>
                    <a href="/unidad3" className={url.includes("unidad3") ? "menu-list-item bold" : "menu-list-item"}>Unidad 3: Macros</a>
                </li>
                <li>
                    <a href="/unidad4/teoria" className={url.includes("unidad4") ? "menu-list-item bold" : "menu-list-item"}>Unidad 4: Funciones</a>
                </li>
                <li>
                    <a href="/unidad5" className={url.includes("unidad5") ? "menu-list-item bold" : "menu-list-item"}>Unidad 5: Formularios</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;