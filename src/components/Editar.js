import React from 'react';

export const Editar = ({movie}) => {
  const title_component = 'Edita La Película Aquí:';

  return (
    <div className='edit_form'>
      <h3 className='title'>{title_component}</h3>
      {/* <h3 className='title'>{title_component}:{movie.title}</h3> */}
      <form>
        <input
          type='text'
          name='title'
          className='titulo_editado'
          defaultValue={movie.title}
        ></input>
        <textarea
          name='description'
          className= 'description_editado'
          defaultValue={movie.description}
        ></textarea>

        <input type='submit' className='editar' value='Actualizar'></input>
      </form>
    </div>
  );
};
