import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import './menu.css';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    'padding': '0px',
    'min-height': 'unset',
    '& .MuiAccordionSummary-content': {
        margin: 'unset'
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    'padding': '0px'
}));

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
    }, [showU1, showU3, showU4, showU5]);

    const handleChange = (show) => () => {
        if (show === 'showU1') {
            setShowU1(!showU1);
            setShowU3(false);
            setShowU4(false);
            setShowU5(false);
        } else if (show === 'showU3') {
            setShowU1(false);
            setShowU3(!showU3);
            setShowU4(false);
            setShowU5(false);
        } else if (show === 'showU4') {
            setShowU1(false);
            setShowU3(false);
            setShowU4(!showU4);
            setShowU5(false);
        } else if (show === 'showU5') {
            setShowU1(false);
            setShowU3(false);
            setShowU4(false);
            setShowU5(!showU5);
        }
    };

    return (
        <div className='menu'>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ flex: 1, height: '1px', marginRight: '5px', backgroundColor: 'black' }} />
                <div>
                    <label className='menu-list-title'>
                        Unidades
                    </label>
                </div>
                <div style={{ flex: 1, height: '1px', marginLeft: '5px', backgroundColor: 'black' }} />
            </div>
            <div>
                <a href="/" className={url === "/" ? "menu-list-item bold" : "menu-list-item"}>Inicio</a>
                <Accordion expanded={showU1} onChange={handleChange('showU1')}>
                    <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className={url.includes("unidad1") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"}
                    >
                        Unidad 1: Excel
                    </AccordionSummary>
                    <AccordionDetails>
                        <a href="/unidad1/conceptos-basicos" className={url.includes("unidad1/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Conceptos básicos</a>
                        <a href="/unidad1/formulas" className={url.includes("formulas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Fórmulas</a>
                        <a href="/unidad1/referencias" className={url.includes("referencias") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Referencias</a>
                        <a href="/unidad1/funciones" className={url.includes("funciones") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Funciones</a>
                        <a href="/unidad1/busqueda" className={url.includes("busqueda") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Funciones de Búsqueda</a>
                        <a href="/unidad1/formato-condicional" className={url.includes("condicional") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Formato condicional</a>
                        <a href="/unidad1/validacion-datos" className={url.includes("validacion") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Validación de datos</a>
                        <a href="/unidad1/formato-tabla" className={url.includes("formato-tabla") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Formato Tabla</a>
                        <a href="/unidad1/filtros" className={url.includes("filtros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Filtros</a>
                        <a href="/unidad1/tablas-dinamicas" className={url.includes("tablas-dinamicas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Tablas Dinámicas</a>
                        <a href="/unidad1/grabacion-macros" className={url.includes("grabacion-macros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Grabación de Macros</a>
                        <a href="/unidad1/ejercicios" className={url.includes("unidad1/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejercicios</a>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={showU3} onChange={handleChange('showU3')}>
                    <AccordionSummary
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        className={url.includes("unidad3") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"}
                    >
                        Unidad 3: Macros
                    </AccordionSummary>
                    <AccordionDetails className='menutopics-list'>
                        <a href="/unidad3/conceptos-basicos" className={url.includes("unidad3/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Conceptos básicos</a>
                        <a href="/unidad3/subrutinas" className={url.includes("subrutinas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Subrutinas</a>
                        <a href="/unidad3/variables" className={url.includes("variables") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Variables</a>
                        <a href="/unidad3/boxes" className={url.includes("boxes") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>InputBox y MsgBox</a>
                        <a href="/unidad3/if" className={url.includes("if") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Estructura condicional</a>
                        <a href="/unidad3/while" className={url.includes("while") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Estructura repetitiva</a>
                        <a href="/unidad3/ejercicios" className={url.includes("unidad3/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejercicios</a>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={showU4} onChange={handleChange('showU4')}>
                    <AccordionSummary
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className={url.includes("unidad4") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"}
                    >
                        Unidad 4: Funciones
                    </AccordionSummary>
                    <AccordionDetails>
                        <a href="/unidad4/teoria" className={url.includes("unidad4/teoria") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Teoría</a>
                        <a href="/unidad4/ejercicios" className={url.includes("unidad4/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejercicios</a>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={showU5} onChange={handleChange('showU5')}>
                    <AccordionSummary
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        className={url.includes("unidad5") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"}
                    >
                        Unidad 5: Formularios
                    </AccordionSummary>
                    <AccordionDetails>
                        <a href="/unidad5/conceptos-basicos" className={url.includes("/unidad5/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Conceptos Básicos</a>
                        <a href="/unidad5/controles" className={url.includes("/unidad5/controles") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Controles</a>
                        <a href="/unidad5/ejemplo-de-uso" className={url.includes("/unidad5/ejemplo-de-uso") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejemplo de Uso</a>
                    </AccordionDetails>
                </Accordion>
                {/*<li> 
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
                        <a href="/unidad1/grabacion-macros" className={url.includes("grabacion-macros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Grabación de Macros</a>
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
                        <a href="/unidad4/teoria" className={url.includes("unidad4/teoria") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Teoría</a>
                    </li>
                    <li>
                        <a href="/unidad4/ejercicios" className={url.includes("unidad4/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejercicios</a>
                    </li>
                </ul>
                <li>
                    <label className={url.includes("unidad5") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic"} onClick={show5}>Unidad 5: Formularios</label>
                </li>
                <ul className={showU5 ? 'menutopics-list visible' : 'menutopics-list not-visible'}>
                    <li>
                        <a href="/unidad5/conceptos-basicos" className={url.includes("/unidad5/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Conceptos Básicos</a>
                    </li>
                    <li>
                        <a href="/unidad5/controles" className={url.includes("/unidad5/controles") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Controles</a>
                    </li>
                    <li>
                        <a href="/unidad5/ejemplo-de-uso" className={url.includes("/unidad5/ejemplo-de-uso") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub"}>Ejemplo de Uso</a>
                    </li>
                </ul>
    */}
            </div>
        </div>
    );
}

export default Menu;