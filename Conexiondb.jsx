import React, { useState } from "react";
import axios from "axios";

const Conexiondb = ({ nombre, apellido, telefono, excepcion }) => {
    // utilizar destructuracion
    const [posts, setPosts] = useState([]);
    const obtenerPosteos = () => {
        axios.get("http://localhost:3000/posts")    //obtengo los posts de la base de datos
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error haciendo get", error);
                return "Error";
            });
    }
    const editarPosteo = ({ telefono, i }) => {
        try {
            axios.patch(`http://localhost:3000/posts/${i.id}`, { numero: telefono });
        } catch (error) {
            console.error('Error al verificar o actualizar:', error);
            return "Error";
        }
    }
    const Postear = ({ nombre, apellido, telefono, maxID }) => {
        try {
            axios.post(`http://localhost:3000/posts`, {
                id: maxID,
                nombre: nombre,
                apellido: apellido,
                telefono: telefono
            });
            return "numero agregado";
        } catch {
            console.error("Error añadiendo numero:");
            return "Error";
        };
    }

    
    obtenerPosteos();
    if (nombre == "") { // me pregunto si recibi algun argumento 
        return posts; // si no recibi nada retorno los posteos de la base de datos
    } else {
        let maxID = 0;
        for (i in posts) {
            if (i.id > maxID) {
                maxID = i.id + 1;
            }
            if (i.nombre == nombre && i.apellido == apellido) { // compruebo si el contacto existe
                if (i.numTelefono == telefono) { // me pregunto si el numero tambien coiside 
                    return "numero ya registrado";
                } else {
                    if (excepcion == true) {
                        editarPosteo(telefono, i);
                    } else {
                        return "el contacto existe con otro numero"
                    }
                }
            } else {
                Postear(nombre, apellido, telefono, maxID);
            }
        }
        // cursera cursos con descuetos para tercer mundistas
        // improvisacion de ex-baterista rhcp improvisacion
        // utilizar pico css para darle estilo
    };

};
const EliminarContacto = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
        .then((response) => {
            return "eliminado";
        })
        .catch((error) => {
            console.error("Error eliminando", error);
            return "Error";
        });
}

//export { EliminarContacto };
//export default Conexionbd;

export default { Conexiondb, EliminarContacto };
