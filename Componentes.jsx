import React, { useState, useEffect } from 'react';

function Componentes() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) { // verifica que la respeusta sea exitosa
          throw new Error('Network response was not ok'); // lanza un error para que falle la promesa y entre en catch
        }
        return response.json();
      })
      .then(data => { // si se la promesa response.json se cumple establece la lista de productos en la variable data
        setProductos(data);
        setCargando(false); // ya no se esta cargando la promesa de consultar a la api
      })
      .catch(error => { // toma el error y lo establece en una variable
        setError(error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Componentes;
