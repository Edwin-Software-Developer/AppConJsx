import { useState } from 'react';

export default function TablaMultiplicar() {
  const [base, setBase] = useState('');

  // Creamos un arreglo del 1 al 13 para iterar sobre él
  const multiplicadores = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <div>
      <h2>Generador de Tabla de Multiplicar</h2>
      <input 
        type="number" 
        value={base} 
        onChange={(e) => setBase(e.target.value)} 
        placeholder="¿Qué tabla deseas ver?"
      />
      
      {base && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* Mapeamos el arreglo para renderizar cada línea de la tabla */}
          {multiplicadores.map(num => (
            <li key={num} style={{ margin: '5px 0' }}>
              {base} x {num} = <strong>{base * num}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}