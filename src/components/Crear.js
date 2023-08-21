import React, { useState } from 'react';

export const Crear = () => {
  const titleComponent = 'Añadir pelicula';
  const [movieState, setMovieState] = useState({
    title: '',
    description: '',
  });

  const { title, description } = movieState;

  const getFormValue = (e) => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //Crear objeto de la pelicula a guardar
    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };

    //Guardar estado
    setMovieState(movie);

    //Guardar en el almacenamiento local
    saveInStorage(movie);

    // console.log(movieState);
  };

  const saveInStorage = (movie) => {

    //Conseguir los elementos que ya están en localStorage
    let elements = JSON.parse(localStorage.getItem('movies'));

    console.log(elements);

    //comprobar si es un array
    if(Array.isArray(elements)){
      //Añadir dentro del array un elemento nuevo
      elements.push(movie);
    } else{
      //Crear un array de la nueva peli
      elements = [movie];
    }

    console.log(elements);

    //Guardar en el localStorage
    localStorage.setItem("movies", JSON.stringify(elements));

    //devolver un objeto guardado
    return movie;

  };

  return (
    <div className='add'>
      <h3 className='title'>{titleComponent}</h3>
      <strong>
        {title && description && 'Has creado la pelicula: ' + title}
      </strong>
      <form onSubmit={getFormValue}>
        <input type='text' id='title' name='title' placeholder='Titulo' />
        <textarea
          id='description'
          name='description'
          placeholder='Descripción'
        ></textarea>
        <input type='submit' id='save' value='Guardar' />
      </form>
    </div>
  );
};
