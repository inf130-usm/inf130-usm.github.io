import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ModeContext } from '../../App';
import { FontContext } from '../../App';
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



const MenuBar = (props) => {
    const { position } = props;

    const night = useContext(ModeContext);
    const dys = useContext(FontContext);
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick (event) {
        setAnchorEl(event.currentTarget);
    } 
    function handleClose (){
        setAnchorEl(null);
    }

    return (
        <>
        {/*----------ESTILO CEL----------*/}
            <div className={position === "header" ? "menu-cel" : "not-visible"}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    className='menubutton'
                >
                    <MenuIcon
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className='buttonmenu'
                    />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    className='menumobile'
                >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="menu-linea"/>
                        <div>
                            <label className={ (dys ? "font-dyslexic" : "font-segoe") + " " + 'menu-list-title'}>
                                Unidades
                            </label>
                        </div>
                        <div className="menu-linea"/>
                    </div>
                    <MenuItem>
                        <a href="/" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url === "/" ? "menu-list-item bold" : "menu-list-item")}>Inicio</a>
                    </MenuItem>
                    <MenuItem>
                        <Accordion expanded={showU1} onChange={handleChange('showU1')} style={{"backgroundColor":"transparent"}}>
                            <AccordionSummary
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                className={(dys ? "font-dyslexic" : "font-segoe") + " " + (url.includes("unidad1") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                            >
                                Unidad 1: Excel
                            </AccordionSummary>
                            <AccordionDetails>
                                <a href="/unidad1/conceptos-basicos" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("unidad1/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Conceptos básicos</a>
                                <a href="/unidad1/formulas" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("formulas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Fórmulas</a>
                                <a href="/unidad1/referencias" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("referencias") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Referencias</a>
                                <a href="/unidad1/funciones" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("funciones") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Funciones</a>
                                <a href="/unidad1/busqueda" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("busqueda") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Funciones de búsqueda</a>
                                <a href="/unidad1/formato-condicional" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("condicional") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Formato condicional</a>
                                <a href="/unidad1/validacion-datos" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("validacion") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Validación de datos</a>
                                <a href="/unidad1/formato-tabla" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("formato-tabla") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Formato tabla</a>
                                <a href="/unidad1/filtros" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("filtros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Filtros</a>
                                <a href="/unidad1/tablas-dinamicas" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("tablas-dinamicas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Tablas dinámicas</a>
                                <a href="/unidad1/grabacion-macros" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("grabacion-macros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Grabación de macros</a>
                                <a href="/unidad1/ejercicios" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("unidad1/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejercicios</a>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem>
                        <Accordion expanded={showU3} onChange={handleChange('showU3')} style={{"backgroundColor":"transparent"}}>
                            <AccordionSummary
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                className={(dys ? "font-dyslexic" : "font-segoe") + " " + (url.includes("unidad3") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                            >
                                Unidad 3: Macros
                            </AccordionSummary>
                            <AccordionDetails className='menutopics-list'>
                                <a href="/unidad3/conceptos-basicos" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("unidad3/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Conceptos básicos</a>
                                <a href="/unidad3/subrutinas" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("subrutinas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Subrutinas</a>
                                <a href="/unidad3/variables" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("variables") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Variables</a>
                                <a href="/unidad3/boxes" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("boxes") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>InputBox y MsgBox</a>
                                <a href="/unidad3/if" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("if") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Estructura condicional</a>
                                <a href="/unidad3/while" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("while") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Estructura repetitiva</a>
                                <a href="/unidad3/ejercicios" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("unidad3/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejercicios</a>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem>
                        <Accordion expanded={showU4} onChange={handleChange('showU4')} style={{"backgroundColor":"transparent"}}>
                            <AccordionSummary
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                className={(dys ? "font-dyslexic" : "font-segoe") + " " + (url.includes("unidad4") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                            >
                                Unidad 4: Funciones
                            </AccordionSummary>
                            <AccordionDetails>
                                <a href="/unidad4/teoria" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("unidad4/teoria") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Teoría</a>
                                <a href="/unidad4/ejercicios" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("unidad4/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejercicios</a>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem>
                        <Accordion expanded={showU5} onChange={handleChange('showU5')} style={{"backgroundColor":"transparent"}}>
                            <AccordionSummary
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                className={(dys ? "font-dyslexic" : "font-segoe") + " " + (url.includes("unidad5") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                            >
                                Unidad 5: Formularios
                            </AccordionSummary>
                            <AccordionDetails>
                                <a href="/unidad5/conceptos-basicos" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("/unidad5/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Conceptos Básicos</a>
                                <a href="/unidad5/controles" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("/unidad5/controles") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Controles</a>
                                <a href="/unidad5/ejemplo-de-uso" className={(dys ? "font-dyslexic" : "font-segoe") + " black " + (url.includes("/unidad5/ejemplo-de-uso") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejemplo de Uso</a>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                </Menu>
            </div>
        {/*----------ESTILO PC----------*/}
            <div className={position === "body" ? "menu" : "not-visible"}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '1px', marginRight: '5px', backgroundColor: night ? 'white':'black' }} />
                    <div>
                        <label className='menu-list-title'>
                            Unidades
                        </label>
                    </div>
                    <div style={{ flex: 1, height: '1px', marginLeft: '5px', backgroundColor: night ? 'white':'black' }} />
                </div>
                <div>
                    <a href="/" className={(night ? "white" : "black") + " " + (url === "/" ? "menu-list-item bold" : "menu-list-item")}>Inicio</a>
                    <Accordion expanded={showU1} onChange={handleChange('showU1')} style={{"backgroundColor":"transparent"}}>
                        <AccordionSummary
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            className={(night ? "white" : "black") + " " + (url.includes("unidad1") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                        >
                            Unidad 1: Excel
                        </AccordionSummary>
                        <AccordionDetails>
                            <a href="/unidad1/conceptos-basicos" className={(night ? "white" : "black") + " " + (url.includes("unidad1/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Conceptos básicos</a>
                            <a href="/unidad1/formulas" className={(night ? "white" : "black") + " " + (url.includes("formulas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Fórmulas</a>
                            <a href="/unidad1/referencias" className={(night ? "white" : "black") + " " + (url.includes("referencias") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Referencias</a>
                            <a href="/unidad1/funciones" className={(night ? "white" : "black") + " " + (url.includes("funciones") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Funciones</a>
                            <a href="/unidad1/busqueda" className={(night ? "white" : "black") + " " + (url.includes("busqueda") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Funciones de búsqueda</a>
                            <a href="/unidad1/formato-condicional" className={(night ? "white" : "black") + " " + (url.includes("condicional") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Formato condicional</a>
                            <a href="/unidad1/validacion-datos" className={(night ? "white" : "black") + " " + (url.includes("validacion") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Validación de datos</a>
                            <a href="/unidad1/formato-tabla" className={(night ? "white" : "black") + " " + (url.includes("formato-tabla") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Formato tabla</a>
                            <a href="/unidad1/filtros" className={(night ? "white" : "black") + " " + (url.includes("filtros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Filtros</a>
                            <a href="/unidad1/tablas-dinamicas" className={(night ? "white" : "black") + " " + (url.includes("tablas-dinamicas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Tablas dinámicas</a>
                            <a href="/unidad1/grabacion-macros" className={(night ? "white" : "black") + " " + (url.includes("grabacion-macros") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Grabación de macros</a>
                            <a href="/unidad1/ejercicios" className={(night ? "white" : "black") + " " + (url.includes("unidad1/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejercicios</a>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={showU3} onChange={handleChange('showU3')} style={{"backgroundColor":"transparent"}}>
                        <AccordionSummary
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            className={(night ? "white" : "black") + " " + (url.includes("unidad3") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                        >
                            Unidad 3: Macros
                        </AccordionSummary>
                        <AccordionDetails className='menutopics-list'>
                            <a href="/unidad3/conceptos-basicos" className={(night ? "white" : "black") + " " + (url.includes("unidad3/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Conceptos básicos</a>
                            <a href="/unidad3/subrutinas" className={(night ? "white" : "black") + " " + (url.includes("subrutinas") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Subrutinas</a>
                            <a href="/unidad3/variables" className={(night ? "white" : "black") + " " + (url.includes("variables") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Variables</a>
                            <a href="/unidad3/boxes" className={(night ? "white" : "black") + " " + (url.includes("boxes") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>InputBox y MsgBox</a>
                            <a href="/unidad3/if" className={(night ? "white" : "black") + " " + (url.includes("if") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Estructura condicional</a>
                            <a href="/unidad3/while" className={(night ? "white" : "black") + " " + (url.includes("while") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Estructura repetitiva</a>
                            <a href="/unidad3/ejercicios" className={(night ? "white" : "black") + " " + (url.includes("unidad3/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejercicios</a>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={showU4} onChange={handleChange('showU4')} style={{"backgroundColor":"transparent"}}>
                        <AccordionSummary
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            className={(night ? "white" : "black") + " " + (url.includes("unidad4") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                        >
                            Unidad 4: Funciones
                        </AccordionSummary>
                        <AccordionDetails>
                            <a href="/unidad4/teoria" className={(night ? "white" : "black") + " " + (url.includes("unidad4/teoria") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Teoría</a>
                            <a href="/unidad4/ejercicios" className={(night ? "white" : "black") + " " + (url.includes("unidad4/ejercicios") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejercicios</a>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={showU5} onChange={handleChange('showU5')} style={{"backgroundColor":"transparent"}}>
                        <AccordionSummary
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            className={(night ? "white" : "black") + " " + (url.includes("unidad5") ? "menu-list-item menu-list-topic bold" : "menu-list-item menu-list-topic")}
                        >
                            Unidad 5: Formularios
                        </AccordionSummary>
                        <AccordionDetails>
                            <a href="/unidad5/conceptos-basicos" className={(night ? "white" : "black") + " " + (url.includes("/unidad5/conceptos") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Conceptos Básicos</a>
                            <a href="/unidad5/controles" className={(night ? "white" : "black") + " " + (url.includes("/unidad5/controles") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Controles</a>
                            <a href="/unidad5/ejemplo-de-uso" className={(night ? "white" : "black") + " " + (url.includes("/unidad5/ejemplo-de-uso") ? "menu-list-item menu-list-item-sub bold" : "menu-list-item menu-list-item-sub")}>Ejemplo de Uso</a>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default MenuBar;