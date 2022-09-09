import React, { useState, useEffect } from 'react';
import './menu.css';

const Menu = () => {
    const url = window.location.pathname;

    const [showU1, setShowU1] = useState(JSON.parse(window.localStorage.getItem('showU1')));
    const [showU3, setShowU3] = useState(JSON.parse(window.localStorage.getItem('showU3')));
    const [showU4, setShowU4] = useState(JSON.parse(window.localStorage.getItem('showU4')));
    const [showU5, setShowU5] = useState(JSON.parse(window.localStorage.getItem('showU5')));

    useEffect(() => {
        localStorage.setItem('showU1', showU1);
        localStorage.setItem('showU3', showU3);
        localStorage.setItem('showU4', showU4);
        localStorage.setItem('showU5', showU5);
    }, [showU1,showU3,showU4,showU5]);


    const show1 = () => {
        setShowU1(!showU1);
        setShowU3(false);
        setShowU4(false);
        setShowU5(false);
    };
    const show3 = () => {
        setShowU1(false);
        setShowU3(!showU3);
        setShowU4(false);
        setShowU5(false);
    }
    const show4 = () => {
        setShowU1(false);
        setShowU3(false);
        setShowU4(!showU4);
        setShowU5(false);
    }
    const show5 = () => {
        setShowU1(false);
        setShowU3(false);
        setShowU4(false);
        setShowU5(!showU5);
    }
    
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
                    <a href="/" className={url === "/" ? "menu-list-item bold" : "menu-list-item"}>Inicio</a>
                </li>
                <li> 
                    <label className={url.includes("unidad1") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"} onClick={show1}>Unidad 1: Excel</label>
                </li>
                <ul className={showU1 ? 'menutopics-list visible' : 'menutopics-list not-visible'}>
                    <li>
                        <a href="/unidad1/conceptos-basicos" className={url.includes("unidad1/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Conceptos básicos</a>
                    </li>
                    <li>
                        <a href="/unidad1/formulas" className={url.includes("formulas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Fórmulas</a>
                    </li>
                    <li>
                        <a href="/unidad1/referencias" className={url.includes("referencias") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Referencias</a>
                    </li>
                    <li>
                        <a href="/unidad1/funciones" className={url.includes("funciones") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Funciones</a>
                    </li>
                    <li>
                        <a href="/unidad1/busqueda" className={url.includes("busqueda") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Funciones de Búsqueda</a>
                    </li>
                    <li>
                        <a href="/unidad1/formato-condicional" className={url.includes("condicional") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Formato condicional</a>
                    </li>
                    <li>
                        <a href="/unidad1/validacion-datos" className={url.includes("validacion") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Validación de datos</a>
                    </li>
                    <li>
                        <a href="/unidad1/formato-tabla" className={url.includes("formato-tabla") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Formato Tabla</a>
                    </li>
                    <li>
                        <a href="/unidad1/filtros" className={url.includes("filtros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Filtros</a>
                    </li>
                    <li>
                        <a href="/unidad1/tablas-dinamicas" className={url.includes("tablas-dinamicas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Tablas Dinámicas</a>
                    </li>
                    <li>
                        <a href="/unidad1/ejercicios" className={url.includes("unidad1/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejercicios</a>
                    </li>
                </ul>
                <li>
                    <label className={url.includes("unidad3") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"} onClick={show3}>Unidad 3: Macros</label>
                </li>
                <ul className={showU3 ? 'menutopics-list visible' : 'menutopics-list not-visible'}>
                    <li>
                        <a href="/unidad3/conceptos-basicos" className={url.includes("unidad3/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Conceptos básicos</a>
                    </li>
                    <li>
                        <a href="/unidad3/subrutinas" className={url.includes("subrutinas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Subrutinas</a>
                    </li>
                    <li>
                        <a href="/unidad3/variables" className={url.includes("variables") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Variables</a>
                    </li>
                    <li>
                        <a href="/unidad3/boxes" className={url.includes("boxes") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>InputBox y MsgBox</a>
                    </li>
                    <li>
                        <a href="/unidad3/if" className={url.includes("if") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Estructura condicional</a>
                    </li>
                    <li>
                        <a href="/unidad3/while" className={url.includes("while") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Estructura repetitiva</a>
                    </li>
                    <li>
                        <a href="/unidad3/ejercicios" className={url.includes("unidad3/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejercicios</a>
                    </li>
                </ul>
                <li>
                    <label className={url.includes("unidad4") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"} onClick={show4}>Unidad 4: Funciones</label>
                </li>
                <ul className={showU4 ? 'menutopics-list visible' : 'menutopics-list not-visible'}>
                    <li>
                        <a href="/unidad4/teoria" className={url.includes("teoria") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Teoría</a>
                    </li>
                    <li>
                        <a href="/unidad4/ejercicios" className={url.includes("ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejercicios</a>
                    </li>
                </ul>
                <li>
                    <label className={url.includes("unidad5") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"} onClick={show5}>Unidad 5: Formularios</label>
                </li>
                <ul className={showU5 ? 'menutopics-list visible' : 'menutopics-list not-visible'}>
                    <li>
                        <a href="" className={url.includes("teoria") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>En construcción...</a>
                    </li>
                </ul>
            </ul>
        </div>
    );
}

export default Menu;