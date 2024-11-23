import { useEffect } from 'react';
import './teclado.css';


// eslint-disable-next-line react/prop-types
const Teclado = ({ onInput }) => {

  const botones = [
    'C', '%', '/', '⌫',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2','3', '+',
    '±', '0','.','='
  ];

  useEffect(() => {
    const manejarTecla = (e) => {
      const permitido = /^[0-9+\-*/.=]$/;
      if (permitido.test(e.key)) {
        onInput(e.key);
      } else if (e.key === 'Enter') {
        onInput('=');   
      } else if (e.key === 'Backspace') {
        onInput('C');
      }
    };

    window.addEventListener('keydown', manejarTecla);
    return () => window.removeEventListener('keydown', manejarTecla);
  }, [onInput]); // Asegura que se actualiza correctamente

  return (

    <div className="teclado">
 
      <button
       
       key={botones[0]}
       onClick={() => onInput(botones[0])}
       className="btn"
       style={{ color: 'red' }}
    
      onKeyDown={(e) => e.preventDefault()} 
      onMouseDown={(e) => e.preventDefault()} 
      >
      {botones[0]}
      </button>
      
      <button
       key={botones[1]}
       onClick={() => onInput(botones[1])}
       className="btn"
       
      >
      {botones[1]}
      </button>

      <button
       key={botones[2]}
       onClick={() => onInput(botones[2])}
       className="btn"
        
      >
      {botones[2]}
      </button>     

      <button
       key={botones[3]}
       onClick={() => onInput(botones[3])}
       //onKeyDown={(e) => e.preventDefault()} 
       onMouseDown={(e) => e.preventDefault()} 
       className="btn"
       
      >
     
      {botones[3]}
      
      </button>








      <button
       key={botones[4]}
       onClick={() => onInput(botones[4])}
       className="btn"
    
      >
      {botones[4]}
      </button>

      <button
       key={botones[5]}
       onClick={() => onInput(botones[5])}
       className="btn"
      
      >
      {botones[5]}
      </button>

      <button
       key={botones[6]}
       onClick={() => onInput(botones[6])}
       className="btn"
      
      >
      {botones[6]}
      </button>

      <button
       key={botones[7]}
       onClick={() => onInput(botones[7])}
       className="btn"
      
      >
      {botones[7]}
      </button>

      <button
       key={botones[8]}
       onClick={() => onInput(botones[8])}
       className="btn"
      
      >
      {botones[8]}
      </button>

      <button
       key={botones[9]}
       onClick={() => onInput(botones[9])}
       className="btn"
      
      >
      {botones[9]}
      </button>

      <button
       key={botones[10]}
       onClick={() => onInput(botones[10])}
       className="btn"
      
      >
      {botones[10]}
      </button>  

      <button
       key={botones[11]}
       onClick={() => onInput(botones[11])}
   
       className="btn"
      
      >
      {botones[11]}
      </button>

      <button
       key={botones[12]}
       onClick={() => onInput(botones[12])}
       className="btn"
      
      >
      {botones[12]}
      </button>

      <button
       key={botones[13]}
       onClick={() => onInput(botones[13])}
       className="btn"
      
      >
      {botones[13]}
      </button>

      <button
       key={botones[14]}
       onClick={() => onInput(botones[14])}
       className="btn"
      
      >
      {botones[14]}
      </button>

      <button
       key={botones[15]}
       onClick={() => onInput(botones[15])}
       className="btn"
       tabIndex='-1'
       onMouseDown={(e) => e.preventDefault()} 
       
      >
      {botones[15]}
      </button>

      <button
       key={botones[16]}
       onClick={() => onInput(botones[16])}
       className="btn"
       tabIndex= '-1'
      >
      {botones[16]}
      </button>

      <button
       key={botones[17]}
       onClick={() => onInput(botones[17])}
       className="btn"
       tabIndex= '-1'
      >
      {botones[17]}
      </button>

      <button
       key={botones[18]}
       onClick={() => onInput(botones[18])}
       className="btn"
       tabIndex= '-1'
      >
      {botones[18]}
      </button>

      <button
       key={botones[19]}
       onClick={() => onInput(botones[19])}
       className="btn"
       onKeyDown={(e) => e.preventDefault()} 
      >
      {botones[19]}
      </button>

    </div>
  );
};

export default Teclado;
