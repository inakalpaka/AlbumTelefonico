import React, { useState } from 'react';
import Swal from 'sweetalert2'
import Conexionbd from './Conexiondb';

const AgregarContacto = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const nombreChange = (event) => {
    setNombre(event.target.value);
  };
  const apellidoChange = (event) => {
    setApellido(event.target.value);
  };
  const telefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const Guardar = () => {
    if (nombre.length > 100) {
      Swal.fire({
        title: "Error!",
        text: "El nombre es demaciado largo",
        icon: "error"
      });
    }
    else if (nombre.length < 5) {
      Swal.fire({
        title: "Error!",
        text: "El nombre es demaciado corto",
        icon: "error"
      });
    }
    else if (apellido.length > 100) {
      Swal.fire({
        title: "Error!",
        text: "El apellido es demaciado largo",
        icon: "error"
      });
    }
    else if (apellido.length < 5) {
      Swal.fire({
        title: "Error!",
        text: "El apellido es demaciado corto",
        icon: "error"
      });
    }
    else if (telefono == "asdfg") {
      Swal.fire({
        title: "Error!",
        text: "El numero no es valido",
        icon: "error"
      });

    } else {
      let resuesta = Conexionbd({ nombre, apellido, numero, excepcion: false });
      if (resuesta != "Error") {
        if (resuesta == "numero ya registrado") {
          Swal.fire({
            title: "Tenemos un Problema!",
            text: "El numero ya esta registrado",
            icon: "error"
          });
        } else if (respuesta == "el contacto existe con otro numero") {
          Swal.fire({
            title: "El Contacto ya existe deseas remoplazar el numero anterior?",
            showDenyButton: true,
            confirmButtonText: "Remplazar",
            denyButtonText: `Cancelar`
          }).then((result) => {
            if (result.isConfirmed) {
              respuesta = Conexionbd({ nombre, apellido, numero, excepcion: true });
              if (respuesta == "Error") {
                Swal.fire({
                  title: "Error!",
                  text: "A ocurrido un Error",
                  icon: "error"
                });
              } else {
                Swal.fire({
                  title: "Listo!",
                  text: "El numero a sido actualizado con exito!",
                  icon: "success"
                });
              }

            }
          });
        } else if (respuesta == "numero agregado") {
          Swal.fire({
            title: "Felicidades!",
            text: "Tu nuevo contacto se a guardado con exito!",
            icon: "success"
          });
        }
      }
    }
  }

  return (
    <form>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Apellido:
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Número de Teléfono:
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </label>
      </div>
      <button onClick={Guardar()} type="submit">Guardar</button>
    </form>

  );
};

export default AgregarContacto;
