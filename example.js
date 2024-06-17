



// console.log(a)
// {const a = 10;
// console.log(a)
// }

// console.log(typeof a);

const obj = {name:'him', age:30,location:{city:'Noida'}}
const shallowCopy = Object.assign({}, obj);

console.log(shallowCopy)

shallowCopy.name = 'saket';

console.log(obj.name);

shallowCopy.location.city = "Nowhere"

console.log(obj.location.city)