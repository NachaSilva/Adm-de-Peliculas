import React from 'react';

export const Editar = ({ movie, conseguirPeliculas, setEditar, setListadoState }) => {
  const title_component = 'Edita La Película Aquí:';

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    //Conseguir el target del evento
    let target = e.target;

    //Buscar indice del objeto de la pelicula a actualizar
    const peliculasAlmacenadas = conseguirPeliculas();
    const index = peliculasAlmacenadas.findIndex((movie) => movie.id === id);

    //Crear objeto con ese id de ese indice, con titulo y descripcion del formulario
    let movie_actualizado = {
      id,
      title: target.title.value,
      description: target.description.value,
    };
    //Actualizar elemento con ese indice
    peliculasAlmacenadas[index] = movie_actualizado;

    //Guardar el nuevo array de objetos en el local storage
    localStorage.setItem("movies", JSON.stringify(peliculasAlmacenadas));

    //actualizar estados
    setListadoState(peliculasAlmacenadas);
    setEditar(0); //para cerrar el formulario
  };

  return (
    <div className='edit_form'>
      <h3 className='title'>{title_component}</h3>
      {/* <h3 className='title'>{title_component}:{movie.title}</h3> */}
      <form onSubmit={(e) => guardarEdicion(e, movie.id)}>
        <input
          type='text'
          name='title'
          className='titulo_editado'
          defaultValue={movie.title}
        ></input>
        <textarea
          name='description'
          className='description_editado'
          defaultValue={movie.description}
        ></textarea>

        <input type='submit' className='editar' value='Actualizar'></input>
      </form>
    </div>
  );
};
