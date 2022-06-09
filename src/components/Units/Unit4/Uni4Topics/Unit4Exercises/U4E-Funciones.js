import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../../units.css';

const EjFunciones = () => {
    const [Answer1, setAnswer1] = React.useState('');
    const [Answer2, setAnswer2] = React.useState('');
    const [Answer3, setAnswer3] = React.useState('');
    const [Answer4, setAnswer4] = React.useState('');
    const [error1, setError1] = React.useState(false);
    const [error2, setError2] = React.useState(false);
    const [error3, setError3] = React.useState(false);
    const [error4, setError4] = React.useState(false);
    const [helperText1, setHelperText1] = React.useState(' ');
    const [helperText2, setHelperText2] = React.useState(' ');
    const [helperText3, setHelperText3] = React.useState(' ');
    const [helperText4, setHelperText4] = React.useState(' ');

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
    const handleText = (event) => {
        setAnswer4(event.target.value);
        setHelperText4(' ');
        setError4(false);
    };

    const handleSubmit1 = (event) => {
        event.preventDefault();
        if (Answer1 === 'D') {
        setHelperText1('¡Bien hecho!');
        setError1(false);
        } else if (Answer1 === '') {
        setHelperText1('Por favor, selecciona una opción.');
        setError1(true);
        } else {
        setHelperText1('Prueba con otra alternativa.');
        setError1(true);
        }
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        if (Answer2 === 'C') {
        setHelperText2('¡Bien hecho!');
        setError2(false);
        } else if (Answer2 === '') {
        setHelperText2('Por favor, selecciona una opción.');
        setError2(true);
        } else {
        setHelperText2('Prueba con otra alternativa.');
        setError2(true);
        }
    };
    const handleSubmit3 = (event) => {
        event.preventDefault();
        if (Answer3 === 'B') {
        setHelperText3('¡Bien hecho!');
        setError3(false);
        } else if (Answer3 === '') {
        setHelperText3('Por favor, selecciona una opción.');
        setError3(true);
        } else {
        setHelperText3('Prueba con otra alternativa.');
        setError3(true);
        }
    };
    const handleSubmit4 = (event) => {
        event.preventDefault();
        if (Answer4.toLowerCase().trim() === 'num2 as integer, num1 as integer' || Answer4.toLowerCase().trim() === 'num2 as integer,num1 as integer') {
        setHelperText4('¡Bien hecho!');
        setError4(false);
        } else if (Answer4 === '') {
        setHelperText4('Por favor, escriba una respuesta.');
        setError4(true);
        } else {
        setHelperText4('Prueba con otra respuesta.');
        setError4(true);
        }
    };

    return(
        <>
            <div className='unit-subtitle'>
                <label>
                    Ejercicios Funciones
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    1) Considerando la función <i>Misterio</i> desarrollada en la imagen. ¿Cuál de estas afirmaciones es incorrecta?
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
                            <FormControlLabel value="A" control={<Radio />} className="unit-exercise-answer" label="La variable num3 almacena el retorno de la función" />
                            <FormControlLabel value="B" control={<Radio />} className="unit-exercise-answer" label="El retorno de la función es de tipo entero" />
                            <FormControlLabel value="C" control={<Radio />} className="unit-exercise-answer" label="La función recibe un solo parámetro" />
                            <FormControlLabel value="D" control={<Radio />} className="unit-exercise-answer" label="El parámetro puede ser número decimal" />
                            </RadioGroup>
                            <Button className='unit-exercise-button' type="submit" variant="outlined">
                            Enviar Respuesta
                            </Button>
                            <FormHelperText>{helperText1}</FormHelperText>
                        </FormControl>
                    </form>
                    <div className="unit-exercise-image">
                        <img src={"/images/FuncionesEjercicio1.png"} className='unit-image' alt="Funciones Ejercicio 1"/>
                    </div>
                </div>
                <p>
                    2)  A partir de la misma función <i>Misterio</i>, podemos decir respecto a su funcionamiento:
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
                            <FormControlLabel value="A" control={<Radio />} className="unit-exercise-answer" label="El ciclo while no se ve afectado por el parámetro" />
                            <FormControlLabel value="B" control={<Radio />} className="unit-exercise-answer" label="La variable num1 solo puede ser números positivos" />
                            <FormControlLabel value="C" control={<Radio />} className="unit-exercise-answer" label="Entrega la suma de los divisores de num1" />
                            <FormControlLabel value="D" control={<Radio />} className="unit-exercise-answer" label="Se puede tener como resultado números negativos" />
                            </RadioGroup>
                            <Button className='unit-exercise-button' type="submit" variant="outlined">
                            Enviar Respuesta
                            </Button>
                            <FormHelperText>{helperText2}</FormHelperText>
                        </FormControl>
                    </form>
                    <div className="unit-exercise-image">
                        <img src={"/images/FuncionesEjercicio1.png"} className='unit-image' alt="Funciones Ejercicio 2"/>
                    </div>
                </div>
                <p>
                    3) En la función <i>EsMayor</i> se perdieron ciertos fragmentos, las palabras necesarias para que la función esté correcta son:
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
                            <FormControlLabel value="A" control={<Radio />} className="unit-exercise-answer" label="String - Integer - EsMayor" />
                            <FormControlLabel value="B" control={<Radio />} className="unit-exercise-answer" label="Integer - String - EsMayor" />
                            <FormControlLabel value="C" control={<Radio />} className="unit-exercise-answer" label="Integer - String - num1" />
                            <FormControlLabel value="D" control={<Radio />} className="unit-exercise-answer" label="String - String - num2" />
                            </RadioGroup>
                            <Button className='unit-exercise-button' type="submit" variant="outlined">
                            Enviar Respuesta
                            </Button>
                            <FormHelperText>{helperText3}</FormHelperText>
                        </FormControl>
                    </form>
                    <div className="unit-exercise-image">
                        <img src={"/images/FuncionesEjercicio3.jpg"} className='unit-image' alt="Funciones Ejercicio 3"/>
                    </div>
                </div>
                <p>
                    4) La función <i>Multiplo</i> recibe dos parámetros y determina si el primer parámetro es múltiplo del segundo parámetro.
                    Lamentablemente el código correspondiente a los parámetros se perdió. Observando el cuerpo de la función, escriba el nombre
                    de los parámetros, así como sus tipos de dato.
                </p>
                <div className='unit-exercise'>
                    <form onSubmit={handleSubmit4} className="unit-exercise-answers">
                        <FormControl error={error4} variant="standard">
                            <TextField className='unit-exercise-textanswer' label="Respuesta" variant="standard" value={Answer4} onChange={handleText}/>
                            <Button className='unit-exercise-button-text' type="submit" variant="outlined">
                            Enviar Respuesta
                            </Button>
                            <FormHelperText>{helperText4}</FormHelperText>
                        </FormControl>
                    </form>
                    <div className="unit-exercise-image">
                        <img src={"/images/FuncionesEjercicio4.jpg"} className='unit-image' alt="Funciones Ejercicio 4"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EjFunciones;