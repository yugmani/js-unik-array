// Import stylesheets
import './style.css';

//Filter Duplicate Objects from an Array in JavaScript
//https://javascript.plainenglish.io/javascript-filter-duplicate-objects-from-array-5232d9651f72

//Array.filter()
// ************************
const arr = [1, 2, 3, 4];

const filtered = arr.filter((num) => num % 2 === 0);
console.log(filtered); //[2, 4]

const person = [
  {
    name: 'Mike',
    location: 'Los Angeles',
  },
  {
    name: 'Kate',
    location: 'New York',
  },
  {
    name: 'Mike',
    location: 'New York',
  },
];

// first object with location of New York
const isNewYork = person.findIndex((obj) => obj.location === 'New York');

console.log(isNewYork); //1;

// first object with location of Los Angeles
const isLosAngeles = person.findIndex((obj) => obj.location === 'Los Angeles');
console.log(isLosAngeles); //0

////filter duplicate property value(name)
const nameUnique = person.filter(
  (obj, index) => index === person.findIndex((item) => item.name === obj.name)
);

console.log(nameUnique);
/*
 {
    name: 'Mike',
    location: 'Los Angeles',
  },
  {
    name: 'Kate',
    location: 'New York',
  }
]
*/

//filter duplicate property value(location)
const unique = person.filter(
  (obj, index) =>
    index === person.findIndex((item) => item.location === obj.location)
);

console.log(unique);
/*
[
  {
    name: 'Mike',
    location: 'Los Angeles',
  },
  {
    name: 'Kate',
    location: 'New York',
  } 
];
*/

//Filter duplicate objects from array by multiple properties
const noDuplicate = person.filter(
  (obj, index) =>
    person.findIndex(
      (item) => item.location === obj.location && item.name === obj.name
    ) === index
);

console.log(noDuplicate);

//Exclude duplicates from unique array
const unik = [];

for (const item of person) {
  const isDuplicate = unik.find((obj) => obj.location === item.location);

  if (!isDuplicate) {
    unik.push(item);
  }
}

console.log(unik);
