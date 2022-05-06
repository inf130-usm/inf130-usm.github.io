import React from 'react';
import './menutopics.css';

const Topics = () => {
    return (
        <div className='topics'>
            <label className='menu-list-title'>
                Contenidos
            </label>
            <ul className='menutopics-list'>
                <li>
                    <a href="/unidad1" className='menu-list-item'>Conceptos básicos</a>
                </li>
                <li>
                    <a href="/unidad2" className='menu-list-item'>Fórmulas</a>
                </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Referencias</a>
                </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Relativas</a>
                    </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Absolutas</a>
                    </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Mixtas</a>
                    </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Funciones</a>
                </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Matemáticas</a>
                    </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Texto</a>
                    </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Fecha y hora</a>
                    </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Condicionales</a>
                    </li>
                    <li>
                        <a href="/unidad3" className='menu-list-item menu-list-item-sub'>Búsqueda</a>
                    </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Formato condicional</a>
                </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Validación de datos</a>
                </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Archivos CSV</a>
                </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Formato Tabla</a>
                </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Filtros</a>
                </li>
                <li>
                    <a href="/unidad3" className='menu-list-item'>Tablas Dinámicas</a>
                </li>
            </ul>
        </div>
    );
}

export default Topics;
