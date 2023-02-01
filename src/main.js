import data from './data/ghibli/ghibli.js'; //importar datos

import { orderingBy, filteringDP, searchInput , directorStat } from './data.js';

const ghibliData = data.films;
const backButton = document.querySelector('.goback')

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
      <button id="${film.id}" class="see-more-button" > See more </button> 

    </div> `;
         
  })
  document.getElementById('data-container').innerHTML = movies;
}
printMore(drawFilms(ghibliData));

//función para crear el evento y crear los contenedores de informacion adicional
function printMore() {
  const setbutton = document.querySelectorAll('.see-more-button');
  setbutton.forEach(button => {
    button.addEventListener("click" , e =>{
      const buttonId = e.target.getAttribute('id')                      
      const matchId = ghiblId(ghibliData , buttonId)
      let seeMore = '';
      const drawPeople =  matchId.people 
      drawPeople.forEach(el => {
        seeMore += `
      <div class="cha-container"> 
      <h2> Characters </h2>
      <div class="imgc">
      <img src=" ${el.img} ">
      </div>
      <h4> ${el.name} </h4>
      <p> Age: ${el.age} Gender: ${el.gender} <p>
    </div>

      `       
      })
        
      const drawLocation =  matchId.locations 
      drawLocation.forEach(el => {
        seeMore += `
      <div class="loc-container"> 
        <h2> Locations </h2>
        <div class="img">
        <img src=" ${el.img} ">
        </div>
        <h4> ${el.name} </h4>
        <h4> Climate : ${el.climate} </h4>
      </div>

      `
      }) 
      const drawVehicles =  matchId.vehicles 
      drawVehicles.forEach(el => {
        seeMore += `
     <div class="veh-container"> 
        <h2> Vehicles </h2>
        <div class="imgc">
        <img src=" ${el.img} ">
        </div>
        <h4> ${el.name} </h4>
        <h5> ${el.description} </h5>
      </div>

     `    
      })
      document.getElementById('data-container').innerHTML = seeMore 
      backButton.style.display = "block"
      hideSelect()
    })
  })
}

//función donde hago match entre los datos y el id de cada película
const ghiblId = (data , id) => {
  for(let i =0 ; i < data.length ; i++)
    if(data[i].id === id){
    
      return data[i]
    }
}

//mostrando los datos ordenados
document.getElementById('desplegar-orden').addEventListener("change" , () =>{
  const selectOrden = document.getElementById('desplegar-orden').value;
  
  if(selectOrden === 'Score'){
    const rtOrdered = drawFilms(orderingBy(ghibliData , 'rt_score'))
    printMore(rtOrdered)
    showDirectorStat()
  }
  if(selectOrden === 'Release'){
    const relOrdered = drawFilms(orderingBy(ghibliData , 'release_date'))
    printMore(relOrdered)
  }
  backButton.style.display = "block"
})

//cuando vayamos a otra parte de la página ocultamos el select
function hideSelect(){
  document.getElementById('select-orden-films').style.opacity = 0 
  document.getElementById('desplegar-orden').style.display = "none"
}

//evento y  funcion que pinta los filtros
document.querySelectorAll('.dic-to-filter').forEach(el =>{
  el.addEventListener("click" , e => {
    const dicFilterList = e.target.getAttribute('value')
    printMore(drawFilms((filteringDP(ghibliData, 'director' , dicFilterList))))
    backButton.style.display = "block"
    hideSelect()
  })
  
})

document.querySelectorAll('.prod-to-filter').forEach(el =>{
  el.addEventListener("click" , e => {
    const prodFilterList = e.target.getAttribute('value')
    printMore(drawFilms((filteringDP(ghibliData , 'producer' , prodFilterList))))
    backButton.style.display = "block"
    hideSelect()
    
  })
  
  
})

//  funcion de buscar y llamado en el input
document.getElementById('search-input').addEventListener("keyup" , (e) =>{
  const input = e.target.value
  const result = searchInput(input , ghibliData)
  printMore(drawFilms(result))
  backButton.style.display = "block"
  hideSelect()
  
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