

 export const orderAlphabet = (filmsTitle, order) =>{
  filmsTitle.sort((a,b) => (a.title > b.title)? 1 : -1)
  if (order === 'A-Z'){
    return filmsTitle
   }else if(order === 'Z-A') {
   return filmsTitle.reverse();
   }
 } 
 console.log(orderAlphabet())
  

 
  


    
 

   









