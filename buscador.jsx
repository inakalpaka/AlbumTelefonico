import React, { useState, useEffect } from 'react';

const buscador = () => {
  const [busqueda, setBusqueda] = useState('');
  const [Componentes, setComponentes] = useState([]);

  useEffect(() => {
    const fetchComponentes = async () => {
      if (!busqueda) {
        setMovies([]); // Limpiar las películas si la consulta está vacía
        return;
      }
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      // Actualizar el estado de movies con los resultados de búsqueda o un array vacío si no hay resultados
      setMovies(data.Response === 'True' ? data.Search : []);
    };

    // Llamar a la función de búsqueda
    fetchComponentes();
  }, [busqueda]); // Dependencia en query para que se ejecute cuando cambia

  // Componente para renderizar una tarjeta de película
  const MovieCard = ({ movie }) => (
    <div className="componente-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'default-poster.jpg'} className="poster" />
      <h3 className="Titulo">{movie.Title}</h3>
      <p className="año">{movie.Year}</p>
    </div>
  );

  return (
    <div className="movie-Filter">
      <input
        type="text"
        placeholder="Busca una película..."
        value={query}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="movie-list">
        {movies.length > 0 ? movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />) : <div>No se encontraron películas</div>}
      </div>
    </div>
  );
};

export default buscador;
