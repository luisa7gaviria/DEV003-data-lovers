import data from './data/ghibli/ghibli.js'; //importar datos
import { orderingBy, filteringD, filteringP , searchInput , directorStat } from './data.js';

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
      <img src=" ${el.img} ">
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
        <img src=" ${el.img} ">
        <h4> ${el.name} </h4>
        <h4> ${el.climate} </h4>
      </div>

      `
    }) 
    const drawVehicles =  matchId.vehicles 
    drawVehicles.forEach(el => {
      seeMore += `
     <div class="veh-container"> 
        <h2> Vehicles </h2>
        <img src=" ${el.img} ">
        <h4> ${el.name} </h4>
        <h5> ${el.description} </h5>
      </div>

     `    
    })
    document.getElementById('data-container').innerHTML = seeMore 
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
  const selectScr = document.getElementById('ordenar-rt').value;
  const selectRel = document.getElementById('ordenar-fecha').value;

  if(selectOrden === selectScr){ printMore(drawFilms(orderingBy(ghibliData , 'rt_score'))) , showDirectorStat() }
  if(selectOrden === selectRel){ printMore(drawFilms(orderingBy(ghibliData , 'release_date'))) }
})


//evento y  funcion que pinta los directores filtrados

document.getElementById('director-h').addEventListener("click" , ()=>{
  const hayaoA = drawFilms(filteringD(ghibliData , 'director', 'Hayao Miyazaki'));
  printMore(hayaoA)
  document.getElementById('select-orden-films').style.opacity = 0;
});
document.getElementById('director-i').addEventListener("click" , ()=>{
  const isaoA =drawFilms(filteringD(ghibliData , 'director' , 'Isao Takahata'));
  printMore(isaoA)
  document.getElementById('select-orden-films').style.opacity = 0;
});
document.getElementById('directors').addEventListener("click" , ()=>{
  const otherA = drawFilms(filteringD(ghibliData , 'director' , 'Others'));
  printMore(otherA)
  document.getElementById('select-orden-films').style.opacity = 0;
});
  
 

// evento y funcion que pinta los productores filtrados

document.getElementById('producer-t').addEventListener("click" , ()=>{
  const filteredT =drawFilms(filteringP(ghibliData , 'producer' , 'Toshio Suzuki'))
  printMore(filteredT)
  document.getElementById('select-orden-films').style.opacity = 0;
});
document.getElementById('producers').addEventListener("click" , ()=>{
  document.getElementById('select-orden-films').style.opacity = 0;
  const filteredO =drawFilms(filteringP(ghibliData , 'producer' , 'Others'));
  printMore(filteredO)
});


//  funcion de buscar y llamado en el input

document.getElementById('search-input').addEventListener("keyup" , (e) =>{
  const input = e.target.value
  const result = searchInput(input , ghibliData)
  printMore(drawFilms(result))
  
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