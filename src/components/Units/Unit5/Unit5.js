import React from 'react';
import { Routes, Route } from "react-router-dom";
import Teoria from './Unit5Topics/1Teoría';
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
                <Route path="teoria" element={<Teoria/>} />
            </Routes>
        </div>
        </>
    );
}

export default Unit5;