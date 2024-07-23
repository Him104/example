// function greet(name) {

//     return `Hello, ${name}`
    
// }


// function greet2(name, greet3 ) {

//     return greet3(name)

// }

// console.log(greet2("Himanshu", greet))

let map = new Map(); // creating a new map

// added arrays to the map 
// map.set('students',['dhreeraj','dheerendra','raj'])
map.set('employees',['abc','xyz','123'])


// retrieve and manipulate arrays from the map
// console.log('students:', map.get('students'))
// console.log('employees:', map.get('employees'))


// // adding an item to an array in map

// let students = map.get('students')

// students.push("Deepak");

// map.set('students', students);

// console.log("Updated students", map.get('students'))

map.forEach((value, key)=> {
    console.log(`printing key and values: ${key}: ${value}`)
})


let arr = [1,2,3,4,5,6,7,8]

// let keys = arr.map((_, index) => index);


// console.log(keys)

// arr.forEach(value => {
//     console.log(value)
// })


// const car = {type:"Fiat", model:"500", color:"white"};


// let keys = Object.values(car)

// console.log(keys)