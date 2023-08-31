import data from './data/ghibli/ghibli.js'; //importar datos

import { orderingBy, filteringDP, searchInput , scoreStat } from './data.js';

const ghibliData = data.films;
const backButton = document.querySelector('.goback')

// funcion para pintar datos 
              
let movies = '';
ghibliData.forEach((film) =>{ 
 
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



//función para crear el evento y crear los contenedores de informacion adicional

// const setbutton = document.querySelectorAll('.see-more-button');
// setbutton.forEach(button => {
//   button.addEventListener("click" , e =>{
//     const buttonId = e.target.getAttribute('id')                      
//     const matchId = ghiblId(ghibliData , buttonId)
//     let seeMore = '';
//     const drawPeople =  matchId.people 
//     drawPeople.forEach(el => {
//       seeMore += `
//     <div class="cha-container"> 
//     <h2> Characters </h2>
//     <div class="imgc">
//     <img src=" ${el.img} ">
//     </div>
//     <h4> ${el.name} </h4>
//     <p> Age: ${el.age} Gender: ${el.gender} <p>
//   </div>

//     `       
//     })
        
//     const drawLocation =  matchId.locations 
//     drawLocation.forEach(el => {
//       seeMore += `
//     <div class="loc-container"> 
//       <h2> Locations </h2>
//       <div class="img">
//       <img src=" ${el.img} ">
//       </div>
//       <h4> ${el.name} </h4>
//       <h4> Climate : ${el.climate} </h4>
//     </div>

//     `
//     }) 
//     const drawVehicles =  matchId.vehicles 
//     drawVehicles.forEach(el => {
//       seeMore += `
//    <div class="veh-container"> 
//       <h2> Vehicles </h2>
//       <div class="imgc">
//       <img src=" ${el.img} ">
//       </div>
//       <h4> ${el.name} </h4>
//       <h5> ${el.description} </h5>
//     </div>

//    `    
//     })
//     document.getElementById('data-container').innerHTML = seeMore 
//     backButton.style.display = "block"
//     
//   })
// })


//función donde hago match entre los datos y el id de cada película
const ghiblId = (data , id) => {
  for(let i =0 ; i < data.length ; i++)
    if(data[i].id === id){
      return data[i]
    }
}

//mostrando los datos ordenados
const setOrder = (item) => {
 
  if (item.target.value === 'Score') {
    orderingBy(ghibliData, 'rt_score')
    showDirectorStat()

  } else if (item.target.value === 'Release') {
    orderingBy(ghibliData, 'release_date')
  }
  backButton.style.display = "block"
}
document.getElementById('desplegar-orden').addEventListener("change", (e) => setOrder(e))


function addFilter(selector, filterBy) {
  const elements = document.querySelectorAll(selector);

  const handleClick = (e) => {
    const filterList = e.target.getAttribute('value');
    filteringDP(ghibliData, filterBy, filterList);
    backButton.style.display = "block";
   
  };

  elements.forEach(el => {
    el.addEventListener("click", handleClick);
  });
}

addFilter('.dic-to-filter', 'director');
addFilter('.prod-to-filter', 'producer');

//  funcion de buscar y llamado en el input
document.getElementById('search-input').addEventListener("keyup" , (e) =>{
  const result = searchInput(e.target.value, ghibliData)

})

//función para mostrar el porcentaje de peliculas con rating mayor a 90
function showDirectorStat (){
  let percent = '';
  const datalength = ghibliData.length
  const ratinglength = ghibliData.filter((movie) => movie.rt_score > 90 ).length
  
  percent += `
  <h3> Did you know? </h3>
  <h4> ${scoreStat(ratinglength , datalength )} % of the movies have a score higher than 90 ⭐ </h4>
  ` 
  document.getElementById('stat').innerHTML = percent
  document.querySelector('.aditionalStat').style.display = "block"

  setTimeout(() => {
    document.querySelector('.aditionalStat').style.display = "none" 
  }, 4500 )

} 

//cerrar contenedor 
document.querySelector('.closeStat').addEventListener("click" , () => {
  document.querySelector('.aditionalStat').style.display = "none" 
})