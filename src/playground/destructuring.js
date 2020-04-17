// const person = {
//     name: 'Sai Krishna',
//     age: 26,
//     location: {
//         city: 'Visakhapatnam',
//         temp: 92
//     }
// }
// const {name : firstName = 'Anonymous',age}  = person;


// console.log(`${firstName} is ${age}`)

// const {city,temp: temperature} = person.location
// if (city && temperature){
// console.log(`it's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

// const address = []

// const [,city,state = 'Visakhapatnam'] = address;
// console.log(`You are in  ${state}`)

const item = ['Coffee (hot)','$2.00','$2.50','$2.75']


const [itemName,,cost2] = item
console.log(`A medium ${itemName} costs ${cost2}`)