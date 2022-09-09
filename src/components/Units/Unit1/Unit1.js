import React from 'react';
import { Routes, Route } from "react-router-dom";
import ConceptosBasicos from './Unit1Topics/1ConceptosBasicos';
import Formulas from './Unit1Topics/2Formulas';
import Referencias from './Unit1Topics/3Referencias';
import Funciones from './Unit1Topics/4Funciones';
import FuncionesBusqueda from './Unit1Topics/5FuncionesBusqueda';
import FormatoCondicional from './Unit1Topics/6FormatoCondicional';
import ValidacionDatos from './Unit1Topics/7ValidacionDatos';
import FormatoTabla from './Unit1Topics/8FormatoTabla';
import Filtros from './Unit1Topics/9Filtros';
import TablasDinamicas from './Unit1Topics/10TablasDinamicas';
import Ejercicios from './Unit1Topics/11Ejercicios';
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
                <Route path="referencias" element={<Referencias/>} />
                <Route path="funciones" element={<Funciones/>} />
                <Route path="busqueda" element={<FuncionesBusqueda/>} />
                <Route path="formato-condicional" element={<FormatoCondicional/>} />
                <Route path="validacion-datos" element={<ValidacionDatos/>} />
                <Route path="formato-tabla" element={<FormatoTabla/>} />
                <Route path="filtros" element={<Filtros/>} />
                <Route path="tablas-dinamicas" element={<TablasDinamicas/>} />
                <Route path="ejercicios" element={<Ejercicios/>} />
            </Routes>
        </div>
        </>
    );
}

export default Unit1;