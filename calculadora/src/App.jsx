import { useState } from 'react';
import Teclado from './components/Teclado.jsx';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  let aux, calculo;


  const handleInput = (value) => {
    
    switch (value) {
      case '=':
        calcular();        
      break;


      case 'C':
        setExpression('');
        setResult('');
      break;

      case '%':

        if (result!== "") {
          
          aux = result /100;
          setResult(aux.toFixed(5));
        } else {
          
          aux = expression /100;
          setResult(aux.toFixed(5));
        }


  
      break;

      case '±':


         if (result!== "") {
          
          aux = -1 * result;
          setResult(aux);
          setExpression(aux);
      
          
        } else {
          
          aux = -1 * expression;
          setResult(aux);
          setExpression(aux);
              
        }

      break;

      case '⌫':
        aux = expression.slice(0, -1);
        setExpression(aux);
        setResult('');
     break;


      default:
        setExpression((prev) => prev + value);

    }
  };


  const calcular = () => {
    try {
      // eslint-disable-next-line no-eval
      let evalResult = eval(expression);
      
      // Limito los decimales a 12
      calculo = parseFloat(evalResult.toFixed(12));  
      console.log('calculo: ', calculo);
     
      setResult(calculo.toString());
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setResult('Error');
    }
  };
 


  return (
    
    <div className="calculadora">
     <br></br>

     <div className="display">
         <div className="expresion">{expression || '0'}</div>
         <div className="resultado">{result || '0'}</div>
      </div>


      <br></br>
      <br></br>

      <Teclado onInput={(value) => handleInput(value)} />
      
    </div>
  );
};

export default App;