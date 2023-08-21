import React, { useEffect, useState } from 'react';

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log('componentes del listado de pelis');
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('movies'));

    setListadoState(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();

    //Filtrar esas peliculas para que elimine del array lo que no quiero
    let nuevoArrayPeliculas = pelis_almacenadas.filter(
      (movie) => movie.id !== parseInt(id)
    );

    //Actualizar estado del listado
    setListadoState(nuevoArrayPeliculas);

    //Actualizar los datos en el local Storage
    localStorage.setItem('movies', JSON.stringify(nuevoArrayPeliculas));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((movie) => {
          return (
            <article key={movie.id} className='peli-item'>
              <h3 className='title'>{movie.title}</h3>
              <p className='description'>{movie.description}</p>

              <button
                className='edit'
                onClick={() => {
                  setEditar(movie.id);
                }}
              >
                Editar
              </button>
              <button className='delete' onClick={() => borrarPeli(movie.id)}>
                Borrar
              </button>

              {/* Aparece formulario de editar */}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
