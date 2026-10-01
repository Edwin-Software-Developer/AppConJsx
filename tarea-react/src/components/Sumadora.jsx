import { useState } from 'react';

export default function Sumadora() {
  // Definimos el estado para nuestros dos inputs y el resultado
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularSuma = () => {
    // Convertimos a número porque los inputs de texto devuelven strings
    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(suma);
  };

  return (
    <div>
      <h2>Sumadora de Números</h2>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Primer número"
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Segundo número"
      />
      <button onClick={calcularSuma}>Sumar</button>
      
      {/* Renderizado condicional: solo muestra el h3 si hay un resultado */}
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
}