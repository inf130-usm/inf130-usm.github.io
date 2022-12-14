import React from 'react';
import { Routes, Route } from "react-router-dom";
import ConceptosBasicos from './Unit5Topics/1ConceptosBasicos';
import Controles from './Unit5Topics/2Controles';
import EjemploDeUso from './Unit5Topics/3EjemploDeUso';
import Page404 from '../../../page404';
import '../units.css';

const Unit5 = () => {
    return (
        <>
        <div className='unit'>
            <div className='unit-title'>
                <label>
                    Unidad 5: Formularios
                </label>
            </div>
            <Routes>
                <Route path="conceptos-basicos" element={<ConceptosBasicos/>} />
                <Route path="controles" element={<Controles/>} />
                <Route path="ejemplo-de-uso" element={<EjemploDeUso/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
        </>
    );
}

export default Unit5;