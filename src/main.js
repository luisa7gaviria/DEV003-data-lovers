import data from './data/ghibli/ghibli.js'; //importar datos
import { orderingBy, filteringD, filteringP , searchInput } from './data.js';

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
      <button id="${film.id}"class="see-more" > More</button> 

    </div> `;
         
  })
 document.getElementById('data-container').innerHTML = movies;
};
drawFilms(ghibliData);

//mostrando los datos ordenados
document.getElementById('desplegar-orden').addEventListener("change" , () =>{
    const selectOrden = document.getElementById('desplegar-orden').value;
    const selectScr = document.getElementById('ordenar-rt').value;
    const selectRel = document.getElementById('ordenar-fecha').value;

  if(selectOrden === selectScr){ drawFilms(orderingBy(ghibliData , 'rt_score')) };
  if(selectOrden === selectRel){ drawFilms(orderingBy(ghibliData , 'release_date')) };
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


 //  funcion de buscar

document.getElementById('search-input').addEventListener("keyup" , (e) =>{
  let input = e.target.value
  const result = searchInput(input , ghibliData)
  drawFilms(result)
  
})
