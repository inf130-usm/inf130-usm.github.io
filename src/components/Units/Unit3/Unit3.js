import React from 'react';
import { Routes, Route } from "react-router-dom";
import ConceptosBasicos from './Unit3Topics/1ConceptosBasicos';
import Subrutinas from './Unit3Topics/2Subrutinas';
import Variables from './Unit3Topics/3Variables';
import Boxes from './Unit3Topics/4Boxes';
import If from './Unit3Topics/5If';
import While from './Unit3Topics/6While';
import Ejercicios from './Unit3Exercises/Ejercicios';
import Page404 from '../../page404';
import '../units.css';

const Unit3 = () => {
    return (
        <>
        <div className='unit'>
            <div className='unit-title'>
                <label>
                    Unidad 3: Macros
                </label>
            </div>
            <Routes>
                <Route path="conceptos-basicos" element={<ConceptosBasicos/>} />
                <Route path="subrutinas" element={<Subrutinas/>} />
                <Route path="variables" element={<Variables/>} />
                <Route path="boxes" element={<Boxes/>} />
                <Route path="if" element={<If/>} />
                <Route path="while" element={<While/>} />
                <Route path="ejercicios" element={<Ejercicios/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
        </>
    );
}

export default Unit3;