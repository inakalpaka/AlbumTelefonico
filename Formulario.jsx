import React, { useState, useEffect } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [Nombre, setNombre] = useState('');
  const [Correo, setCorreo] = useState('');

  const NombreChange = (event) => {
    setNombre(event.target.value);
  };
  const CorreoChange = (event) => {
    setCorreo(event.target.value);
  };
  const Mostrar = () => {
    console.log("el nombre es: ");
    console.log(Nombre);
    console.log("el correo es: ");
    console.log(Correo);
  }
  return (
<div>
      <h1>Formulario</h1>
      <input
        type="text"
        value={Nombre}
        onChange={NombreChange}
      />
      <> </>
      <input
        type="text"
        value={Correo}
        onChange={CorreoChange}
      />
      <></>
      <button onClick={Mostrar}>Mostrar</button>

    </div>
    
  );
};

export default Formulario;
