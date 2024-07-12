function sum(...numbers) {
 
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1,2,3,3,5,6,67,7,7))


const [first, ...restItems] = [1,2,3,4,5,6,7,8]

console.log(first)

console.log(restItems) // a function to accept an indefinite number of arguments as an array


// function add(a,b,c) {

//     return a+b+c;
    
// }

// console.log(add(1,2))