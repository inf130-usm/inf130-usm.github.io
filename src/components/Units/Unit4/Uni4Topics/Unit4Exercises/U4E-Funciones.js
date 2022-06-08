import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import '../../../units.css';

const EjFunciones = () => {
    const [Answer1, setAnswer1] = React.useState('');
    const [error1, setError1] = React.useState(false);
    const [helperText1, setHelperText1] = React.useState(' ');

    const handleRadioChange1 = (event) => {
        setAnswer1(event.target.value);
        setHelperText1(' ');
        setError1(false);
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

    return(
        <>
            <div className='unit-subtitle'>
                <label>
                    Ejercicios Funciones
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    1) Considerando la función <i>Misterio</i> desarrollada en la imagen. ¿Cuál de estas afirmaciones es correcta?
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
                            <FormControlLabel value="A" control={<Radio />} className="unit-excercise-answer" label="" />
                            <FormControlLabel value="B" control={<Radio />} className="unit-excercise-answer" label="" />
                            <FormControlLabel value="C" control={<Radio />} className="unit-excercise-answer" label="" />
                            <FormControlLabel value="D" control={<Radio />} className="unit-excercise-answer" label="" />
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
            </div>
        </>
    );
}

export default EjFunciones;