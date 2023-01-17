import data from './data/ghibli/ghibli.js'; //importar datos
import { drawFilms , orderingBy} from './data.js';

const getData = data.films

//Mostrando datos en la interfaz
const dataContainerEl = document.querySelector("#data-container")
dataContainerEl.innerHTML = drawFilms(getData)


//ordenando por medio de un select
const drawRating = document.getElementById('desplegar-orden')
const release = document.getElementById('ordenar-fecha').value
const score = document.getElementById('ordenar-rt').value

drawRating.addEventListener("change" , () =>{ 
  if(drawRating.value === score){dataContainerEl.innerHTML = drawFilms(orderingBy(getData , 'rt_score'))}
  if(drawRating.value === release){dataContainerEl.innerHTML = drawFilms(orderingBy(getData , 'release_date'))}
  if(drawRating.value === ""){dataContainerEl.innerHTML = drawFilms(getData)}
  
})

 // Mostrando/Quitando modal
const modal = document.querySelector('.modal')
const showModal = document.getElementsByClassName('film-container') 
const closeModal = document.querySelector('#close-modal')

for( let i=0 ; i< showModal.length ; i++){
  showModal[i].addEventListener("click" , () =>{
  modal.style.display = "block";
  
})
}
closeModal.addEventListener("click" , () =>{
  modal.style.display = "none";
})



console.log(document.querySelectorAll('.film-container'))
console.log(document.querySelector('.film-container'))


     
 