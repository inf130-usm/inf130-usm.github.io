import React from 'react';
import { Routes, Route } from "react-router-dom";
import ConceptosBasicos from './Unit3Topics/1ConceptosBasicos';
import Subrutinas from './Unit3Topics/2Subrutinas';
import Variables from './Unit3Topics/3Variables';
import Boxes from './Unit3Topics/4Boxes';
import MenuTopicsUnit3 from '../../MenuTopics/Topics/MenuTopicsUnit3';
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
            </Routes>
        </div>
        <MenuTopicsUnit3/>
        </>
    );
}

export default Unit3;