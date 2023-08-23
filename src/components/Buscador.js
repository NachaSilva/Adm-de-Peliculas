import React, { useState } from 'react';

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusquedaState] = useState('');
  const [noEncontrado, setNoEncontradoState] = useState(false);

  const buscarPeli = (e) => {
    // Crear estado y actualizarlo
    setBusquedaState(e.target.value);

    //El listado completo de peliculas
    // Es agregar a app.js el listado en buscador y colocar los parámetros en buscador.js

    //Filtrar para buscar coincidencias
    let pelisEncontradas = listadoState.filter((movie) => {
      return movie.title.toLowerCase().includes(busqueda.toLowerCase());
    });

    if (busqueda.length <= 1 || pelisEncontradas <= 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem('movies'));
      setNoEncontradoState(true);
    } else {
      setNoEncontradoState(false);
    }

    //console.log(pelisEncontradas);

    //Actualizar el estado del listado principal con lo que filtre
    setListadoState(pelisEncontradas);
  };

  return (
    <div className='search'>
      <h3 className='title'>Buscador: {busqueda}</h3>
      {(noEncontrado == true && busqueda.length > 1) && (
      <span className='no-encontrado'>No se ha encontrado coincidencia</span>
      )}
      <form>
        <input
          type='text'
          id='search_field'
          name='busqueda'
          autoComplete='off'
          // value={busqueda}
          onChange={buscarPeli}
        />

        <button id='search'>Buscar</button>
      </form>
    </div>
  );
};
