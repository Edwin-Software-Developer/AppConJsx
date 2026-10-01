export default function Inicio() {
  return (
    <div className="vista-centrada">
      <h1>Perfil del Estudiante</h1>
    
      <img src="/foto2x2.png" alt="Foto de perfil" className="foto-perfil" />
      <div className="datos">
        <p><strong>Nombre:</strong> Edwin Oscar</p>
        <p><strong>Apellido:</strong> Perez Rodriguez</p>
        <p><strong>Correo:</strong> 20240134@itla.edu.do</p>
      </div>
    </div>
  );
}