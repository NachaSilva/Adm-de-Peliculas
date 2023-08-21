export const SaveInStorage = (key, element) => {

    //Conseguir los elementos que ya están en localStorage
    let elements = JSON.parse(localStorage.getItem(key));

    console.log(elements);

    //comprobar si es un array
    if(Array.isArray(elements)){
      //Añadir dentro del array un elemento nuevo
      elements.push(element);
    } else{
      //Crear un array de la nueva peli
      elements = [element];
    }

    console.log(elements);

    //Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elements));

    //devolver un objeto guardado
    return element;

  };