import React, { useState, useEffect } from "react";
import axios from "axios";

const Conexionbd = ({ nombre, apellido, telefono, excepcion }) => {
    // utilizar destructuracion
    const [posts, setPosts] = useState([]);
    const obtenerPosteos = (posts) => {
        axios.get("http://localhost:3000/posts")    //obtengo los posts de la base de datos
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error haciendo get", error);
            });
    }
    const editarPosteo = ({telefono, i }) => {
        try {
            axios.patch(`http://localhost:3000/posts/${i.id}`, { numero: telefono });
        } catch (error) {
            console.error('Error al verificar o actualizar:', error);
        }
    }

    obtenerPosteos();

    if (nombre == "") { // me pregunto si recibi algun argumento 
        return posts; // si no recibi nada retorno los posteos de la base de datos
    } else {
        for (i in posts) {
            if (i.nombre == nombre && i.apellido == apellido) { // compruebo si el contacto existe
                if (i.numTelefono == telefono) { // me pregunto si el numero tambien coiside 
                    return "numero ya registrado";
                } else {
                    if (excepcion == true) {
                        editarPosteo(telefono, i);
                    }else{
                        return "el contacto existe con otro numero"
                    }
                    // Llamar a la función con los datos necesarios
                }
                return "numero actualizado";
            } else {
            try {
                axios.post('${ http://localhost:3000/posts}, ${{nombre: nombre,apellido: apellido,numTelefono: telefono}}')
                return "numero agregado";
            } catch {
                console.error("Error añadiendo numero:");
            };
        }
    }
    // cursera cursos con descuetos para tercer mundistas
    // improvisacion de ex-baterista rhcp improvisacion
    // utilizar pico css para darle estilo
    return posts;
};

};

export default Conexionbd;
