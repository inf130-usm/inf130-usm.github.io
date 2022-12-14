import React from 'react';
import { Routes, Route } from "react-router-dom";
import Teoria from './Unit4Topics/1Teoría';
import Ejercicios from './Unit4Exercises/Ejercicios';
import Page404 from '../../../page404';
import '../units.css';

const Unit4 = () => {
    return (
        <>
        <div className='unit'>
            <div className='unit-title'>
                <label>
                    Unidad 4: Funciones
                </label>
            </div>
            <Routes>
                <Route path="teoria" element={<Teoria/>} />
                <Route path="ejercicios" element={<Ejercicios/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
        </>
    );
}

export default Unit4;