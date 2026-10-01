import { useState } from 'react';

export default function Traductor() {
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');

  const numeroALetras = (num) => {
    if (num === 1000) return "mil";
    if (num === 0) return "cero";
    if (num < 1 || num > 1000) return "Número fuera de rango (1-1000)";

    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    let letras = "";

    // Lógica para centenas
    if (num === 100) return "cien";
    if (num > 100) {
      letras += centenas[Math.floor(num / 100)] + " ";
      num = num % 100;
    }

    // Lógica para decenas y unidades
    if (num > 9 && num < 20) {
      letras += especiales[num - 10];
    } else {
      const decena = Math.floor(num / 10);
      const unidad = num % 10;
      
      if (decena === 2 && unidad > 0) letras += "veinti" + unidades[unidad];
      else {
        if (decena > 0) letras += decenas[decena];
        if (decena > 0 && unidad > 0) letras += " y ";
        if (unidad > 0) letras += unidades[unidad];
      }
    }
    return letras.trim();
  };

  const manejarCambio = (e) => {
    const val = parseInt(e.target.value);
    setNumero(e.target.value);
    if (!isNaN(val)) {
      setTexto(numeroALetras(val));
    } else {
      setTexto('');
    }
  };

  return (
    <div>
      <h2>Traductor (1 al 1000)</h2>
      <input 
        type="number" 
        min="1" max="1000"
        value={numero} 
        onChange={manejarCambio} 
        placeholder="Ingresa un número..."
      />
      <h3>En letras: <span style={{ color: 'blue' }}>{texto}</span></h3>
    </div>
  );
}