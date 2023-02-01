export function orderingBy (data , key){  
  const set = data.sort((a, b) => { return b[key] - a[key] });
  return set
} 

export const filteringDP = (data , key ,keyvalue) => {
  const filtered = data.filter(movie => {
    if(movie[key] === keyvalue ){
      return true
    } 
  })
  return filtered
}

export const searchInput = ( text , data ) => {     
  const match = data.filter(item =>{
    return  item.title.toLowerCase().includes( text )
  })
  return match
}

export const directorStat = (ratingData , data) => {
  const result = Math.round((ratingData / data ) * 100 )
  return result
  
}














