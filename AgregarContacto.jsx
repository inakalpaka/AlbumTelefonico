import React, { useState } from 'react';
import Swal from 'sweetalert2'

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
    if(nombre.length > 100){
        console.log("el nombre es demaciado largo");
    }
    else if(nombre.length < 5){
        console.log("el nombre es demaciado corto");
    }
    else if(apellido.length > 100){
        console.log("el apellido es demaciado largo");
    }
    else if(nombre.length < 5){
        console.log("el apellido es demaciado corto");
    }
    else if(telefono == "351 123 4567"){
        console.log("el numero no es valido");
    }else{
        if(nombre == nobreEnBaseDeDatos && apellido == apellidoEnBaseDeDatos){ //comprobar si en nombre que quiero cargar existe en la base de datos 
            if(numero == numeroEnBaseDeDatos){
                Swal.fire({
                    title: "El Contacto existe deseas remoplazar el numero anterior?",
                    showDenyButton: true,
                    confirmButtonText: "Remplazar",
                    denyButtonText: `Cancelar`
                  }).then((result) => {
                    if (result.isConfirmed) {
                      //remplazar numero viejo por numero nuevo en la base de datos
                      Swal.fire("Listo!", "Numero Remplazado", "Listo");
                  }});
                  
            }
        }else{
            //agregar el nuevo contacto a la base de datos
            Swal.fire({
                title: "Felicidades!",
                text: "Tu nuevo contacto se a guardado con exito!",
                icon: "success"
              });
        }

        console.log("el nombre es: ");
        console.log(nombre);
        console.log("el apellido es: ");
        console.log(apellido);
        console.log("el telefono es: ");
        console.log(telefono);
        //guardar el json
        //subirlo a la base de datos local
    }
    console.log("el nombre es: ");
    console.log(nombre);
    console.log("el apellido es: ");
    console.log(apellido);
    console.log("el telefono es: ");
    console.log(telefono);
  }
 /* return (
<div>
      <h1>Formulario</h1>
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
    
  );*/
  return(
    <form onSubmit={Guardar}>
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
    <button type="submit">Guardar</button>
</form>

  );
};

export default AgregarContacto;
