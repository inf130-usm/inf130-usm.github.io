import React from 'react';
import EjFormulas from './2Formulas';
import EjReferencias from './3Referencias';
import EjFunciones from './4Funciones';
import EjFuncionesBusqueda from './5FuncionesBusqueda';
import EjFormatoCondicional from './6FormatoCondicional';
import EjValidacionDatos from './7ValidacionDatos';
import EjFormatoTabla from './8FormatoTabla';
import EjFiltros from './9Filtros';
import EjTablasDinamicas from './10TablasDinamicas';
import EjGrabacionMacros from './11GrabacionMacros';
import '../../units.css';

const Ejercicios = () => {
    return (
        <>
            <EjFormulas/>
            <EjReferencias/>
            <EjFunciones/>
            <EjFuncionesBusqueda/>
            <EjFormatoCondicional/>
            <EjValidacionDatos/>
            <EjFormatoTabla/>
            <EjFiltros/>
            <EjTablasDinamicas/>
            <EjGrabacionMacros/>
        </>
    );
}

export default Ejercicios;