import React from 'react';
import '../menutopics.css';

const MenuTopicsUnit1 = () => {
    return (   
        <div className='topics'>
            <label className='menu-list-title'>
                Contenidos
            </label>
            <ul className='menutopics-list'>
                <li>
                    <a href="/unidad1/conceptos-basicos" className='menu-list-item'>Conceptos básicos</a>
                </li>
                <li>
                    <a href="/unidad1/formulas" className='menu-list-item'>Fórmulas</a>
                </li>
                <li>
                    <a href="/unidad1/referencias" className='menu-list-item'>Referencias</a>
                </li>
                <li>
                    <a href="/unidad1/funciones" className='menu-list-item'>Funciones</a>
                </li>
                <li>
                    <a href="/unidad1/formato-condicional" className='menu-list-item'>Formato condicional</a>
                </li>
                <li>
                    <a href="/unidad1/validacion" className='menu-list-item'>Validación de datos</a>
                </li>
                <li>
                    <a href="/unidad1/archivos-csv" className='menu-list-item'>Archivos CSV</a>
                </li>
                <li>
                    <a href="/unidad1/formato-tabla" className='menu-list-item'>Formato Tabla</a>
                </li>
                <li>
                    <a href="/unidad1/filtros" className='menu-list-item'>Filtros</a>
                </li>
                <li>
                    <a href="/unidad1/tablas-dinamicas" className='menu-list-item'>Tablas Dinámicas</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuTopicsUnit1;