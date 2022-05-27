import React from 'react';
import { Routes, Route } from "react-router-dom";
import ConceptosBasicos from './Unit1Topics/1ConceptosBasicos';
import Formulas from './Unit1Topics/2Formulas';
import Referencias from './Unit1Topics/3Referencias';
import Relativas from './Unit1Topics/4Relativas';
import Absolutas from './Unit1Topics/5Absolutas';
import Mixtas from './Unit1Topics/6Mixtas';
import ReferenciasEjercicios from './Unit1Topics/7ReferenciasEjercicios';
import MenuTopicsUnit1 from '../../MenuTopics/Topics/MenuTopicsUnit1';
import '../units.css';

const Unit1 = () => {
    return (
        <>
        <div className='unit'>
            <div className='unit-title'>
                <label>
                    Unidad 1: Introducción a Excel
                </label>
            </div>
            <Routes>
                <Route path="conceptos-basicos" element={<ConceptosBasicos/>} />
                <Route path="formulas" element={<Formulas/>} />
                <Route path="referencias" element={<><Referencias/><Relativas/><Absolutas/><Mixtas/><ReferenciasEjercicios/></>} />
            </Routes>
            <div id='u1-funciones'></div>
            <div id='u1-matematicas'></div>
            <div id='u1-texto'></div>
            <div id='u1-fechayhora'></div>
            <div id='u1-condicionales'></div>
            <div id='u1-busqueda'></div>
            <div id='u1-formatocondicional'></div>
            <div id='u1-validaciondatos'></div>
            <div id='u1-archivoscsv'></div>
            <div id='u1-formatotabla'></div>
            <div id='u1-filtros'></div>
            <div id='u1-tablasdinamicas'></div>
        </div>
        <MenuTopicsUnit1/>
        </>
    );
}

export default Unit1;