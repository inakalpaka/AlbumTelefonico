import React, { useState, useEffect } from "react";
import axios from "axios";

const Conexionbd = (...args) => {
    const [posts, setPosts] = useState([]);


            axios.get("http://localhost:3000/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
        if(args == []){
            return posts;
        }else{
            for( i in posts){
                if(i.nombre == args[0] && i.apellido == args[1]){
                    if(i.numTelefono == args[2]){
                        return "numero ya regisnrado";
                    }else{
                        return "contacto registrado, numero distinto";
                    }
                }else{
                    try{
                    axios.post('${ http://localhost:3000/posts}, ${{nombre: args[0],apellido: args[1],numTelefono: args[2]}}')
                    return "numero agregado";
                    }
                    .catch((error) => {
                        console.error("Error aciendo post:", error);
                    });
                }
            }

    return posts;
};

export default Conexionbd;
