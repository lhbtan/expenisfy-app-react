// Object Destructuring

// const person = {
//     name: 'Lloyd',
//     age: 28,
//     location: {
//         city: 'Amsterdam',
//         temp: 23
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if( city && temperature) {
// console.log(`It's ${temperature} in ${city}`);
// }

// const book ={
//  title: 'Ego is the enemy',
//  author: 'Ryan Holiday',
//  publisher: {
//      name: 'Penguin'
//  }

// }

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//Array Destructuring

const address = ['1299 S Junior Street', 'Philadelphia', 'Pennsylvenia' , '19147'];

const [, city, state = 'New York'] = address;


console.log(`you are in ${city} ${state}`)

const menu = ['banana', '2', '1', '4'];

const [ item, , mediumPrice] = menu;
console.log(`A medium ${item} costs $${mediumPrice}`)