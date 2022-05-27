import React from 'react';
import './menutopics.css'

const Menu = () => {
    return (
        <div className='menu'>
            <label className='menu-list-title'>
                INF-130
            </label>
            <ul className='menutopics-list'>
                <li>
                    <a href="/" className='menu-list-item'>Inicio</a>
                </li>
                <li>
                    <a href="/unidad1/conceptos-basicos" className='menu-list-item'>Unidad 1: Excel</a>
                </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Unidad 3: Macros</a>
                </li>
                <li>
                    <a href="/unidad4" className='menu-list-item'>Unidad 4: Funciones</a>
                </li>
                <li>
                    <a href="/unidad5" className='menu-list-item'>Unidad 5: Formularios</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;