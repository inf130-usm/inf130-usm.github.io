import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Home';
import Unit1 from '../Units/Unit1/Unit1';
import Unit3 from '../Units/Unit3';
import Unit4 from '../Units/Unit4';
import Unit5 from '../Units/Unit5';
import "./contents.css";

const Contents = () => {
    return (
        <div className='contents'>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/unidad1" element={<Unit1/>} />
                <Route path="/unidad3" element={<Unit3/>} />
                <Route path="/unidad4" element={<Unit4/>} />
                <Route path="/unidad5" element={<Unit5/>} />
            </Routes>
        </div>
    );
}

export default Contents;