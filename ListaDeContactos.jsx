import React, { useState } from 'react';
import Swal from 'sweetalert2'
import Conexiondb from './Conexiondb.jsx';


const ListaContactos = ({ contactosIniciales }) => {
  const [contactos, setContactos] = useState(contactosIniciales);
  setContactos(Conexiondb({ nombre = "",apellido = "",telefono = "",excepcion = false}));

  const borrarContacto = () => {
    Swal.fire({
      title: "Quieres eliminar este contacto?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        if (Conexiondb.EliminarContacto(id) == "Error") {
          Swal.fire({
            title: "Error",
            text: "A ocurrido un Error!",
            icon: "error"
          });
        } else {
          Swal.fire({
            title: "Listo",
            text: "Numero Eliminado",
            icon: "success"
          });
        }
      }
    });
  }


  return (
    <div>
      {contactos.map(contacto => (
        <div key={contacto.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <p>{contacto.nombre} {contacto.apellido}</p>
            <p>{contacto.telefono}</p>
          </div>
          <button onClick={() => borrarContacto(contacto.id)} style={{ marginLeft: '10px' }}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ListaContactos;
