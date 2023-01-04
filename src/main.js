import { example } from './data.js/'; //importar funciones

import data from './data/ghibli/ghibli.js'; //importar datos

 console.log(example, data); 

 const esGhibli = data.films; 
 function mostrarData () {
    let lista = ''
    for (let i = 0; i< esGhibli.length; i++ ){
      
      lista += ` <div class="info"> 
      <img src= ${esGhibli[i].poster} >
      <p> Título: ${esGhibli[i].title} </p> 
      <p> Fecha de lanzamiento: ${esGhibli[i].release_date} </p>
      <p> Director: ${esGhibli[i].director} </p>
      <p> Productor: ${esGhibli[i].producer} </p>
      <p> Descripción: ${esGhibli[i].description} </p>
      <p> Rating: ${esGhibli[i].rt_score} </p>
        </div>
      ` 
        
        
    }
    document.getElementById("films").innerHTML = lista;
 }
   document.getElementById('botonPeliculas').addEventListener("click", () => {
      mostrarData();

 }); 


    
     
     
 