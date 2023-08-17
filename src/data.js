export const orderingBy = (data , key) => data.sort((a, b) => { return b[key] - a[key] });

export const filteringDP = (data , key ,keyvalue) => {
  return data.filter(movie => {
    if(movie[key] === keyvalue ){
      return true
    } 
  })
}

export const searchInput = ( text , data ) => {     
  return data.filter(item =>{
    return  item.title.toLowerCase().includes( text )
  })
}

export const scoreStat = (ratingData , data) =>  Math.round((ratingData / data ) * 100 )
  














