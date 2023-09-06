import data from './data/ghibli/ghibli.js'; //importar datos
import { orderingBy, filteringDP, searchInput , scoreStat } from './data.js';

const ghibliData = data.films;

// Mostrar data
const printGhibliData = (filmsArray) => {
  const ghibliMovies = filmsArray.map((film) => { 
 
    return `<div class="film-container" >  
      <h3 class="title">${film.title} </h3> 
      <div class="imgc">
      <img src="${film.poster}">
      </div>
      <h4> 📆 ${film.release_date} </h4>
      <h5> ⭐ ${film.rt_score} </h5>
      <button id="${film.id}" class="see-more-button"> See More </button> 
    </div>`    
  })
  document.getElementById('data-container').innerHTML = ghibliMovies.join('');
  printMoreData()
}

const printMoreData = () => {
  const setButtons = document.getElementsByClassName('see-more-button');

  Array.from(setButtons).forEach(function(button) {
    button.addEventListener("click", function() {
      const matchId = ghiblId(ghibliData, button.id);

      let seeMore = "";

      [{data: matchId.people, type: "cha-container", title: "Characters", imgClass: "imgc"},
        {data: matchId.locations, type: "loc-container", title: "Locations", imgClass: "imgc"},
        {data: matchId.vehicles, type: "veh-container", title: "Vehicles", imgClass: "imgc"}].forEach(function(item) {
          
        item.data.forEach(function(el) {
          seeMore += `
          <div class="${item.type}">
            <h2>${item.title}</h2>
            <div class=${item.imgClass}>
              <img src="${el.img}">
            </div>
            <h4>${el.name}</h4>
            <h5> ${el.age ? `<strong>Age: </strong>`+ el.age : ''} ${el.gender ? `<strong> Gender: </strong>` + el.gender : ''} 
            ${el.vehicle_class ? `<strong> Vehicle class: </strong>` + el.vehicle_class : ''} ${el.climate ? `<strong> Climate: </strong>` +  el.climate : ''} </h5>
          </div>
        `;
        });
      });

      document.querySelector('#data-container').innerHTML = seeMore;
    });
  });
}
printGhibliData(ghibliData)

// Obteniendo pelicula
const ghiblId = (data , id) => {
  for(let i =0 ; i < data.length ; i++)
    if(data[i].id === id){
      return data[i]
    }
}

// Orden
const setOrder = (item) => {
 
  if (item.target.value === 'Score') {
    printGhibliData(orderingBy(ghibliData, 'rt_score'))
    showDirectorStat()

  } else if (item.target.value === 'Release') {
    printGhibliData(orderingBy(ghibliData, 'release_date'))
  }

}
document.getElementById('desplegar-orden').addEventListener("change", (e) => setOrder(e))

// Filtrado 
function addFilter(selector, filterBy) {
  const elements = document.querySelectorAll(selector);

  const handleClick = (e) => {
    const filterList = e.target.getAttribute('value');
    printGhibliData(filteringDP(ghibliData, filterBy, filterList));
  };

  elements.forEach(el => {
    el.addEventListener("click", handleClick);
  });
}

addFilter('.dic-to-filter', 'director');
addFilter('.prod-to-filter', 'producer');

// Búsqueda por título
document.getElementById('search-input').addEventListener("keyup" , (e) =>{
  const searchKeys = e.target.value
  printGhibliData(searchInput(searchKeys, ghibliData))
  
})

// Cálculo stadistico
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

// Cerrar cálculo
document.querySelector('.closeStat').addEventListener("click" , () => {
  document.querySelector('.aditionalStat').style.display = "none" 
})