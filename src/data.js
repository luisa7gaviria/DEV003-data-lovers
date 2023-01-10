export function drawFilms(filmsArray){               //Funcion cuyo unico fin es PINTAR, DEVOLVER EL HTML DE CADA FILM
  
  return filmsArray.map( function(film){ 

    return `
    <div class="film-container">
      <h4>${film.title} </h4> 
      <p> ${film.release_date} </p>
    </div>
    `
  } ).join('')
};

export const orderAlphabet = (film) =>{
  film.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});
}











