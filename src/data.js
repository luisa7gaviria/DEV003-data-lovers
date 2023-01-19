export const orderingBy = (data, key) =>{
  return [...data].sort((a , b) => {
    return b[key] - a[key]
  })
}











