import data from './data/ghibli/ghibli.js'; //importar datos
import  { orderAlphabet }  from './data.js/'; //importar funciones

console.log( orderAlphabet ,data); 

const esGhibli = data.films; 


function mostrarData () {
    
    let lista = ''
    for (let i = 0; i< esGhibli.length; i++ ){
      
      lista += `  
      
      <div class="info">
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
    
} 
mostrarData();      


   document.querySelector('.boton-Peliculas').addEventListener("click", mostrarData);
   document.getElementById('botonPeliculas').addEventListener("click", mostrarData);
   


//replantear el uso de esas comillas , averiguo porque tengo cada cosa
// puedo mostrar los datos solo
//no sobrecomplicarnos, en principio cumplir los OAs
//cambiar el idioma

    
     
     
 