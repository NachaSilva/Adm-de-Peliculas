import React, { useEffect, useState } from 'react';

export const Listado = () => {

  const [listadoState, setListadoState] = useState([]);

  useEffect(()=>{
    console.log('componentes del listado de pelis')
  conseguirPeliculas();
  
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('movies'));
    
    setListadoState(peliculas);
  };

  return (
    <>
  {listadoState !=null ? listadoState.map(movie => {
    
    return(
      <article key={movie.id} className='peli-item'>
        <h3 className='title'>{movie.title}</h3>
        <p className='description'>{movie.description}</p>

        <button className='edit'>Editar</button>
        <button className='delete'>Borrar</button>
      </article>
    )
  })
: <h2>No hay peliculas para mostrar</h2>
}


    </>
  );
};
