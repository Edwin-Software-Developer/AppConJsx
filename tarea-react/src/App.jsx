import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Sumadora from './components/Sumadora';
import Traductor from './components/Traductor';
import TablaMultiplicar from './components/TablaMultiplicar';
import Experiencia from './components/Experiencia';
import './App.css'; // Asegúrate de tener estilos básicos aquí

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Este es tu Menú de Navegación lateral o superior */}
        <nav className="menu">
          <h2>Mi Tarea React</h2>
          <ul>
            <li><Link to="/">Página Inicial</Link></li>
            <li><Link to="/sumadora">Sumadora</Link></li>
            <li><Link to="/traductor">Traductor a Letras</Link></li>
            <li><Link to="/tabla">Tabla de Multiplicar</Link></li>
            <li><Link to="/experiencia">Experiencia</Link></li>
          </ul>
        </nav>

        {/* Aquí se inyectan las vistas dependiendo del link seleccionado */}
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sumadora" element={<Sumadora />} />
            <Route path="/traductor" element={<Traductor />} />
            <Route path="/tabla" element={<TablaMultiplicar />} />
            <Route path="/experiencia" element={<Experiencia />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;