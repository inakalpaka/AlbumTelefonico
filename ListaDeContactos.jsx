import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { Axios } from 'axios';

const Formulario = () => {
  Axios

  return (
<div>
      <h1>Formular</h1>
      <input
        type="text"
        value={nombre}
        onChange={nombreChange}
      />
      <> </>
      <input
        type="text"
        value={apellido}
        onChange={apellidoChange}
      />
      <></>
      <input
        type="text"
        value={telefono}
        onChange={telefonoChange}
      />
      <></>

      <button onClick={Guardar}>Guardar</button>

    </div>
    
  );
};

export default Formulario;
