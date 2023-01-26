export function orderingBy (data , key){  
  const set = data.sort((a, b) => { return b[key] - a[key] });
  return set
} 

export const filteringD = (data , key ,keyvalue) => {
  const filtered = data.filter(movie => {
    if(movie[key] === keyvalue ){
      return true
    } 
    if( keyvalue === 'Others' ){ 
      return movie[key] !== 'Hayao Miyazaki' && 'Isao Takahata' 
    }
  })
  return filtered
}

export const filteringP = (data , key , keyvalue) => {
  const filteredP = data.filter(movie => {
    if(movie[key] === keyvalue ){
      return true
    } 
    if( keyvalue === 'Others' ){ 
      return movie[key] !== 'Toshio Suzuki' 
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














