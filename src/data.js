export function orderingBy (data , key){  

  return [... data].sort((a, b) => {                      
    return  b[key] - a[key]
  })  

} 

export const filteringD = (data , keyvalue) => {
  const filtered = data.filter(movie => {
    if(movie.director === keyvalue ){
      return true
    } 
    if( keyvalue === 'Others' ){ 
      return movie.director !== 'Hayao Miyazaki' && 'Isao Takahata' 
    }
  })
  return filtered
}

export const filteringP = (data , keyvalue) => {
  const filteredP = data.filter(movie => {
    if(movie.producer === keyvalue ){
      return true
    } 
    if( keyvalue === 'Others' ){ 
      return movie.producer !== 'Toshio Suzuki' 
    }
  })
  return filteredP
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











