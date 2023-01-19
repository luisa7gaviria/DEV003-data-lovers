
export const orderingBy = (data , key) =>{  

  return [... data].sort((a, b) => {                      
   return  b[key] - a[key]
  })  

} 

// export const searchBy = (movie , search) =>{
//   if (movie === search){
//     movie.filter((item => item === search)
//      // no se como seria para un personaje
//   )
//   }else{
//     throw new Error('Tu búsqueda no coincide')
//   }
  
  
// }
//export const filtering = (toFilter) => toFilter.filter(filtrao => filtrao.propiedad === 'valor de esa key') //especie genero : personajes
  

















