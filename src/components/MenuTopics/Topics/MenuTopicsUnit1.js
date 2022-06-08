import React from 'react';
import '../menutopics.css';

const MenuTopicsUnit1 = () => {
    const url = window.location.pathname;

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
                    <a href="/unidad1/conceptos-basicos" className={url.includes("conceptos-basicos") ? "menu-list-item bold" : "menu-list-item"}>Conceptos básicos</a>
                </li>
                <li>
                    <a href="/unidad1/formulas" className={url.includes("formulas") ? "menu-list-item bold" : "menu-list-item"}>Fórmulas</a>
                </li>
                <li>
                    <a href="/unidad1/referencias" className={url.includes("referencias") ? "menu-list-item bold" : "menu-list-item"}>Referencias</a>
                </li>
                <li>
                    <a href="/unidad1/funciones" className={url.includes("funciones") ? "menu-list-item bold" : "menu-list-item"}>Funciones</a>
                </li>
                <li>
                    <a href="/unidad1/formato-condicional" className={url.includes("condicional") ? "menu-list-item bold" : "menu-list-item"}>Formato condicional</a>
                </li>
                <li>
                    <a href="/unidad1/validacion-datos" className={url.includes("validacion") ? "menu-list-item bold" : "menu-list-item"}>Validación de datos</a>
                </li>
                <li>
                    <a href="/unidad1/archivos-csv" className={url.includes("archivos") ? "menu-list-item bold" : "menu-list-item"}>Archivos CSV</a>
                </li>
                <li>
                    <a href="/unidad1/formato-tabla" className={url.includes("formato-tabla") ? "menu-list-item bold" : "menu-list-item"}>Formato Tabla</a>
                </li>
                <li>
                    <a href="/unidad1/filtros" className={url.includes("filtros") ? "menu-list-item bold" : "menu-list-item"}>Filtros</a>
                </li>
                <li>
                    <a href="/unidad1/tablas-dinamicas" className={url.includes("tablas-dinamicas") ? "menu-list-item bold" : "menu-list-item"}>Tablas Dinámicas</a>
                </li>
                <li>
                    <a href="/unidad1/ejercicios" className={url.includes("ejercicios") ? "menu-list-item bold" : "menu-list-item"}>Ejercicios</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuTopicsUnit1;