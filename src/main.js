import data from './data/ghibli/ghibli.js'; //importar datos
import { orderingBy } from './data.js';

//variable donde almacenamos los datos para trabajar más comodamente
const getData = data.films

// funcion para pintar datos 
function drawFilms(filmsArray){               //Funcion cuyo unico fin es PINTAR, DEVOLVER EL HTML DE CADA FILM
  
  let containerPicture = document.getElementById('data-container');
 const picture = filmsArray.map( function(film){ 

     return  `
    <div class="film-container" id= " ${film.id} ">
      
      <h4 class="title">${film.title} </h4> 
      <img src="${film.poster}">
      <h4> 📆 ${film.release_date} </h4>
      <h5> ⭐ ${film.rt_score} </h5>
      
    </div>
           
    ` 

  } ).join('')

  containerPicture.innerHTML = picture
  
  console.log(containerPicture.querySelectorAll('.film-container'))
  return containerPicture
  


}
document.querySelectorAll('.film-container').forEach((items) =>{
  items.addEventListener("click" , contModal )
}) 
// funcion para pintar datos del modal 

const contModal = (ghibli) =>{
  return `
  <div class="modal">
   
  <div class="modal-header"> Datos extrasss
    <span id="close-modal"> &times;</span>
  </div>
    
   <div id="modal-info">
 
    <div class="modal-content">
 
      <h4> Director: ${ghibli.director} </h4> 
      <h4> Productor: ${ghibli.producer} </h4>
      <h4> Rating: ${ghibli.rt_score} </h4>
      <h4> Description: ${ghibli.description} </h4>

    </div>
  </div>
 
</div>
  `
}

//Mostrando datos en la interfaz
 drawFilms(getData) 



//ordenando por medio de un select
const drawRating = document.getElementById('desplegar-orden')
const release = document.getElementById('ordenar-fecha').value
const score = document.getElementById('ordenar-rt').value
const dataContainerEl = document.getElementById('data-container')

// ejecutamos funcion de pintar con los nuevos arreglos

drawRating.addEventListener("change" , () =>{ 
  if(drawRating.value === score){dataContainerEl.innerHTML = drawFilms(orderingBy(getData , 'rt_score'))  }
  if(drawRating.value === release){dataContainerEl.innerHTML = drawFilms(orderingBy(getData , 'release_date')) }
  if(drawRating.value === ""){dataContainerEl.innerHTML = drawFilms(getData)}
  
})




