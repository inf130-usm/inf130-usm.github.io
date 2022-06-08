import React from 'react';
import '../menutopics.css';

const MenuTopicsUnit1 = () => {
    return (   
        <div className='topics'>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', marginRight: '5px', backgroundColor: 'black'}} />
                <div>
                    <label className='menu-list-title'>
                        Tópicos
                    </label>
                </div>
                <div style={{flex: 1, height: '1px', marginLeft: '5px', backgroundColor: 'black'}} />
            </div>
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
                    <a href="/unidad1/validacion-datos" className='menu-list-item'>Validación de datos</a>
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
                <li>
                    <a href="/unidad1/ejercicios" className='menu-list-item'>Ejercicios</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuTopicsUnit1;