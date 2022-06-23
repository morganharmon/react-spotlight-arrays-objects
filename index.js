// INPUT: an object with a "name" attribute such as
//   {name: 'Benny', type: 'dog'}
// OUTPUT: the value of the 'name' attribute i.e. Benny
// REQS: use destructuring and the function should be a single line

const pet = {name: 'Benny', type: 'dog'}
export const getName = ({ name }) => {
  return name;
}

// INPUT: an object with a nested "address" attribute such as
//   {name: 'Bob Smith', address: {street: 'Main Street', number: 123, city: 'Anytown', country: 'USA}}
// OUTPUT: the string 'Bob Smith lives at 123 Main Street, Anytown, USA'
// REQS: use destructuring and template literals
export const printAddress = ({ name, address }) => {
  return `${name} lives at ${address.number} ${address.street}, ${address.city}, ${address.country}` 
}

// REFACTOR CHALLENGE
// Refactor this function so that all values in the object are destructured
// as part of the function definitions (i.e. there should be no dots in the template literals)
export const printUserInfo = (user) => {
  const {username, name: {first: firstName}, name: {last: lastName}, info: {favorites: {color}}, info: {favorites: {food}}, info: {pet: {name: petName}}, info: {address: {number}}, info: {address: {street}}, info: {address: {city}}, info: {address: {country}} } = user;
  return `
    Username: ${username},
    Full Name: ${firstName} ${lastName},
    Favorite Color: ${color},
    Favorite Food: ${food},
    Pet Name: ${petName},
    Address: ${number} ${street}, ${city}, ${country}
    `
}

// INPUT: an unknown number of input arguments, all numbers
// OUTPUT: their sum
// REQS: use rest parameters
//  getSum(1, 2, 3) === 6
//  getSum(1, 2, 3, 4, 5) === 15
export const getSum = (...rest) => {
  return rest.reduce((acc, curr) => acc = acc + curr, 0)
}

// INPUT: an unknown number of arguments
// OUTPUT: an array with the first two arguments destructured and the remaining in a nested array
// REQS: use rest parameters
// getFirstTwoArgs(1, 2, 3, 4, 5) should return [1, 2, [3, 4, 5]]
// getFirstTwoArgs('a', 'b', 'c', 'd') should return ['a', 'b', ['c', 'd']]
export const getFirstTwoArgs = (first, second, ...rest) => {
  return [first, second, [...rest]];
}

// INPUT: an object with the following structure
// {
//   shoes: ['Air Max', 'Air Force', 'Air Jordan', 'Air Mag', 'Pegasus', 'Kobe'],
//   slogan: 'Just Do It',
//   logo: 'Swoosh',
//   headquarters: 'Portland',
// }
// OUTPUT: an object with an additional attribute called sneakerCount which appends the number of shoes
// in the shoes array
// {
//   shoes: ['Air Max', 'Air Force', 'Air Jordan', 'Air Mag', 'Pegasus', 'Kobe'],
//   slogan: 'Just Do It',
//   logo: 'Swoosh',
//   headquarters: 'Portland',
//   sneakerCount: 6
// }
// REQS:
//    use destructuring to get the children attribute
//    return a NEW object, do not modify the object passed in to the function
//    use spread operator to create a new object

export const addSneakerCount = ({ shoes, ...rest }) => {
  const answer = {shoes, rest};
  answer.sneakerCount = shoes.length
  return answer;
}

// INPUT: brands from data.js
// OUTPUT: the brand names listed
// REQS: use Object.keys to solve
export const getBrandNames = (brands) => {
  return Object.keys(brands);
}

// INPUT: brands from data.js
// OUTPUT: total number of sneaker types across all brands (14)
export const totalSneakerCount = (brands) => {
  const {Nike: {shoes: nikeShoes}, Puma: {shoes: pumaShoes}, Adidas: {shoes: adidasShoes}} = brands
  return nikeShoes.length + pumaShoes.length + adidasShoes.length;
}

// INPUT: An object
// OUTPUT: An array with key value pairs converted to arrays
// EXAMPLE:
// convertToArray({ a: 1, b: 2 }) => [["a", 1], ["b", 2]]
// convertToArray({}) => []
// Source: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

export const convertToArray = (obj) => {
  const keys = Object.keys(obj); // an array of keys ["a", "b", ...]
  let answer = [];
  for (let i = 0; i < keys.length; i++) {
    answer[i] = [keys[i], obj[keys[i]]];
  }
  return answer;
}

//
