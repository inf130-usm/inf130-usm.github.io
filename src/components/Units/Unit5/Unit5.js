import React from 'react';
import { Routes, Route } from "react-router-dom";
import ConceptosBasicos from './Unit5Topics/1ConceptosBasicos';
import Controles from './Unit5Topics/2Controles';
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
            </Routes>
        </div>
        </>
    );
}

export default Unit5;