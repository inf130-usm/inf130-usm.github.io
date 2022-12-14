import React from 'react';
import { Routes, Route } from "react-router-dom";
import Menu from '../Menu/Menu';
import Home from '../Units/Home';
import Unit1 from '../Units/Unit1/Unit1';
import Unit3 from '../Units/Unit3/Unit3';
import Unit4 from '../Units/Unit4/Unit4';
import Unit5 from '../Units/Unit5/Unit5';
import Page404 from '../../page404';
import "./body.css";

const Body = () => {
    return (
        <div className='body'>
            <Menu/>
            <div className='contents'>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/unidad1/*" element={<Unit1/>} />
                    <Route path="/unidad3/*" element={<Unit3/>} />
                    <Route path="/unidad4/*" element={<Unit4/>} />
                    <Route path="/unidad5/*" element={<Unit5/>} />
                    <Route path="*" element={<Page404/>} />
                </Routes>
            </div>
        </div>
    );
}

export default Body;
