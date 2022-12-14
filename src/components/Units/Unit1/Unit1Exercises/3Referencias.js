import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import '../../units.css';

const EjReferencias = () => {
    const [Answer1, setAnswer1] = React.useState('');
    const [Answer2, setAnswer2] = React.useState('');
    const [Answer3, setAnswer3] = React.useState('');
    const [error1, setError1] = React.useState(false);
    const [error2, setError2] = React.useState(false);
    const [error3, setError3] = React.useState(false);
    const [helperText1, setHelperText1] = React.useState(' ');
    const [helperText2, setHelperText2] = React.useState(' ');
    const [helperText3, setHelperText3] = React.useState(' ');

    const handleRadioChange1 = (event) => {
        setAnswer1(event.target.value);
        setHelperText1(' ');
        setError1(false);
    };
    const handleRadioChange2 = (event) => {
        setAnswer2(event.target.value);
        setHelperText2(' ');
        setError2(false);
    };
    const handleRadioChange3 = (event) => {
        setAnswer3(event.target.value);
        setHelperText3(' ');
        setError3(false);
    };

    const handleSubmit1 = (event) => {
        event.preventDefault();
        if (Answer1 === 'B') {
        setHelperText1('¡Correcto!');
        setError1(false);
        } else if (Answer1 === '') {
        setHelperText1('Por favor, selecciona una opción.');
        setError1(true);
        } else {
        setHelperText1('Explicación de solución correcta en construcción.');
        setError1(true);
        }
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        if (Answer2 === 'D') {
        setHelperText2('¡Correcto!');
        setError2(false);
        } else if (Answer2 === '') {
        setHelperText2('Por favor, selecciona una opción.');
        setError2(true);
        } else {
        setHelperText2('Explicación de solución correcta en construcción.');
        setError2(true);
        }
    };
    const handleSubmit3 = (event) => {
        event.preventDefault();
        if (Answer3 === 'B') {
        setHelperText3('¡Correcto!');
        setError3(false);
        } else if (Answer3 === '') {
        setHelperText3('Por favor, selecciona una opción.');
        setError3(true);
        } else {
        setHelperText3('Explicación de solución correcta en construcción.');
        setError3(true);
        }
    };
    return (
        <>
            <div className='unit-subtitle'>
                <label>
                    Ejercicios Referencias
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    1) Considerando la formula ingresada en la celda D2, al seleccionar y arrastrar hacia las celdas inferiores ocurre un error como se ve en la imagen. ¿Por qué ocurre esto?
                </p>
                <div className='unit-exercise'>
                    <form onSubmit={handleSubmit1} className="unit-exercise-answers">
                        <FormControl error={error1} variant="standard">
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz1"
                                value={Answer1}
                                onChange={handleRadioChange1}
                            >
                            <FormControlLabel value="A" control={<Radio />} className="unit-excercise-answer" label="No se utilizó referencias relativas." />
                            <FormControlLabel value="B" control={<Radio />} className="unit-excercise-answer" label="No se utilizó referencias absolutas." />
                            <FormControlLabel value="C" control={<Radio />} className="unit-excercise-answer" label="No se puede utilizar seleccionar y arrastrar con formulas creadas." />
                            <FormControlLabel value="D" control={<Radio />} className="unit-excercise-answer" label="Las celdas inferiores no tienen el formato moneda asignado." />
                            </RadioGroup>
                            <Button className='unit-exercise-button' type="submit" variant="outlined">
                            Enviar Respuesta
                            </Button>
                            <FormHelperText>{helperText1}</FormHelperText>
                        </FormControl>
                    </form>
                    <div className="unit-exercise-image">
                        <img src={"/images/U1E3F1.jpg"} className='unit-image' alt="Referencias Ejercicio 1"/>
                    </div>
                </div>
                <p>
                    2) El valor de venta establecido en la columna C, debe ser el costo del producto más el porcentaje de ganancia definido en la celda B1. ¿Cuál fórmula es correcta si queremos escribirla en la celda C4 y arrastrar hacia abajo?
                </p>
                <div className='unit-exercise'>
                    <form onSubmit={handleSubmit2} className="unit-exercise-answers">
                        <FormControl error={error2} variant="standard">
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz2"
                                value={Answer2}
                                onChange={handleRadioChange2}
                            >
                            <FormControlLabel value="A" control={<Radio />} className="unit-excercise-answer" label="=B4+(B4*B1)" />
                            <FormControlLabel value="B" control={<Radio />} className="unit-excercise-answer" label="=B4+(B4*$B1)" />
                            <FormControlLabel value="C" control={<Radio />} className="unit-excercise-answer" label="=B4+($B$4*B1)" />
                            <FormControlLabel value="D" control={<Radio />} className="unit-excercise-answer" label="=B4+(B4*B$1)" />
                            </RadioGroup>
                            <Button className='unit-exercise-button' type="submit" variant="outlined">
                            Enviar Respuesta
                            </Button>
                            <FormHelperText>{helperText2}</FormHelperText>
                        </FormControl>
                    </form>
                    <div className="unit-exercise-image">
                        <img src={"/images/U1E3F2.jpg"} className='unit-image' alt="Referencias Ejercicio 2"/>
                    </div>
                </div>
                <p>
                    3) La ganancia por venta de Camilo es el valor establecido en la celda C1. Ingrese la formula para obtener la ganancia por la venta 1 y poder luego arrastrar hacia la derecha para obtener la ganancia de las otras 2.
                </p>
                <div className='unit-exercise'>
                    <form onSubmit={handleSubmit3} className="unit-exercise-answers">
                        <FormControl error={error3} variant="standard">
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz3"
                                value={Answer3}
                                onChange={handleRadioChange3}
                            >
                            <FormControlLabel value="A" control={<Radio />} className="unit-excercise-answer" label="" />
                            <FormControlLabel value="B" control={<Radio />} className="unit-excercise-answer" label="" />
                            <FormControlLabel value="C" control={<Radio />} className="unit-excercise-answer" label="" />
                            <FormControlLabel value="D" control={<Radio />} className="unit-excercise-answer" label="" />
                            </RadioGroup>
                            <Button className='unit-exercise-button' type="submit" variant="outlined">
                            Enviar Respuesta
                            </Button>
                            <FormHelperText>{helperText3}</FormHelperText>
                        </FormControl>
                    </form>
                    <div className="unit-exercise-image">
                        <img src={"/images/U1E3F3.jpg"} className='unit-image' alt="Referencias Ejercicio 3"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EjReferencias;