import React from 'react';
import { Routes, Route } from "react-router-dom";
import ConceptosBasicos from './Unit1Topics/1ConceptosBasicos';
import Formulas from './Unit1Topics/2Formulas';
import Referencias from './Unit1Topics/3.1Referencias';
import Relativas from './Unit1Topics/3.2Relativas';
import Absolutas from './Unit1Topics/3.3Absolutas';
import Mixtas from './Unit1Topics/3.4Mixtas';
import Funciones from './Unit1Topics/4.1Funciones';
import Matematicas from './Unit1Topics/4.2Matematicas';
import Texto from './Unit1Topics/4.3Texto';
import FechayHora from './Unit1Topics/4.4FechayHora';
import Condicionales from './Unit1Topics/4.5Condicionales';
import Busqueda from './Unit1Topics/4.6Busqueda';
import FormatoCondicional from './Unit1Topics/5FormatoCondicional';
import ValidacionDatos from './Unit1Topics/6ValidacionDatos';
import ArchivosCSV from './Unit1Topics/7ArchivosCSV';
import FormatoTabla from './Unit1Topics/8FormatoTabla';
import Filtros from './Unit1Topics/9Filtros';
import TablasDinamicas from './Unit1Topics/10TablasDinamicas';
import Ejercicios from './Unit1Topics/11Ejercicios';
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
                <Route path="referencias" element={<><Referencias/><Relativas/><Absolutas/><Mixtas/></>} />
                <Route path="funciones" element={<><Funciones/><Matematicas/><Texto/><FechayHora/><Condicionales/><Busqueda/></>} />
                <Route path="formato-condicional" element={<FormatoCondicional/>} />
                <Route path="validacion-datos" element={<ValidacionDatos/>} />
                <Route path="archivos-csv" element={<ArchivosCSV/>} />
                <Route path="formato-tabla" element={<FormatoTabla/>} />
                <Route path="filtros" element={<Filtros/>} />
                <Route path="tablas-dinamicas" element={<TablasDinamicas/>} />
                <Route path="ejercicios" element={<Ejercicios/>} />
            </Routes>
        </div>
        <MenuTopicsUnit1/>
        </>
    );
}

export default Unit1;