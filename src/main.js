import data from './data/ghibli/ghibli.js'; //importar datos
import { orderingBy, filteringD, filteringP , searchInput , directorStat} from './data.js';

const ghibliData = data.films;


// funcion para pintar datos 
function drawFilms (filmsArray) {               
  let movies = '';
  filmsArray.forEach((film) =>{ 
 
    movies +=  `
    <div class="film-container" >
      
      <h3 class="title">${film.title} </h3> 
      <img src="${film.poster}">
      <h4> 📆 ${film.release_date} </h4>
      <h5> ⭐ ${film.rt_score} </h5>
      

    </div> `;
         
  })
  document.getElementById('data-container').innerHTML = movies;
}
drawFilms(ghibliData);

//mostrando los datos ordenados
document.getElementById('desplegar-orden').addEventListener("change" , () =>{
  const selectOrden = document.getElementById('desplegar-orden').value;
  const selectScr = document.getElementById('ordenar-rt').value;
  const selectRel = document.getElementById('ordenar-fecha').value;

  if(selectOrden === selectScr){ drawFilms(orderingBy(ghibliData , 'rt_score')) , showDirectorStat() }
  if(selectOrden === selectRel){ drawFilms(orderingBy(ghibliData , 'release_date')) }
})


//evento y  funcion que pinta los directores filtrados

document.getElementById('director-h').addEventListener("click" , ()=>{
  drawFilms(filteringD(ghibliData , 'Hayao Miyazaki'));
  document.getElementById('select-orden-films').style.opacity = 0;
});
document.getElementById('director-i').addEventListener("click" , ()=>{
  drawFilms(filteringD(ghibliData , 'Isao Takahata'));
  document.getElementById('select-orden-films').style.opacity = 0;
});
document.getElementById('directors').addEventListener("click" , ()=>{
  drawFilms(filteringD(ghibliData , 'Others'));
  document.getElementById('select-orden-films').style.opacity = 0;
});
  
 

// evento y funcion que pinta los productores filtrados

document.getElementById('producer-t').addEventListener("click" , ()=>{
  drawFilms(filteringP(ghibliData , 'Toshio Suzuki'))
  document.getElementById('select-orden-films').style.opacity = 0;
});
document.getElementById('producers').addEventListener("click" , ()=>{
  document.getElementById('select-orden-films').style.opacity = 0;
  drawFilms(filteringP(ghibliData , 'Others'));
});


//  funcion de buscar y llamado en el input

document.getElementById('search-input').addEventListener("keyup" , (e) =>{
  const input = e.target.value
  const result = searchInput(input , ghibliData)
  drawFilms(result)
  
})

//función para mostrar el porcentaje de peliculas con rating mayor a 90
function showDirectorStat (){
  let percent = '';
  const datalength = ghibliData.length
  const ratinglength = ghibliData.filter((movie) =>{
    if(movie.rt_score > 90 ){
      return true
    }
  }).length
  percent += `
  <h3> Did you know? </h3>
  <h4> ${directorStat(ratinglength , datalength )} % of the movies have a score higher than 90 ⭐ </h4>
  ` 
  document.getElementById('stat').innerHTML = percent
  document.querySelector('.aditionalStat').style.display = "block" 

  //cerrar contenedor 
  document.querySelector('.closeStat').addEventListener("click" , () =>{
    document.querySelector('.aditionalStat').style.display = "none" 
  })
  
}

//con esta función para obtener los personajes tengo que especificar el índice
//creo que le puedo pasar el arreglo recorrido a getcha y tengo los psjs de cada uno

// const getcha = () =>{
//   for( let i = 0; i < ghibliData.length ; i++ ){
//     return ghibliData[10].people 
//   }
// }
// console.log(getcha(ghibliData))