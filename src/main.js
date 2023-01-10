import data from './data/ghibli/ghibli.js'; //importar datos
import { drawFilms , orderAlphabet } from './data.js';

console.log(orderAlphabet ,data); 

const dataContainerEl = document.querySelector("#data-container")

dataContainerEl.innerHTML = drawFilms(data.films)


  
     
 