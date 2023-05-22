export const filterNumbers = (array, largerThan) => {
  const filteredArray = []
  for (let i = 0; i < array.length; i++) {

  if (array[i] <= largerThan) {
     filteredArray.push(array[i])
  }
}
return filteredArray
}

console.log(filterNumbers[1, 20, 25, 34, 99], 25)
