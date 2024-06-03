// function chair (arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i],i,arr);
//     }
// }

// const numbers = [1,2,3,4,5,6,7,8];

// chair(numbers, (element, index, arr) => {
//     console.log(`Element at index ${index} is ${element}`)
// });

// const numbers = [1,2,3,4,5,6,7,8];

// const oddNo = numbers.filter(number =>  number % 2 !== 0);

// const doubleOddNo = oddNo.map(number => number * 2)

//  doubleOddNo.forEach((number, index) => {
//     console.log(`Double no. at index ${index} is ${number}`)
// })

// function max(arr) {
//   let maxNum = arr[0];
//   for (let index = 1; index < arr.length; index++) {

//     console.log(arr.length)
//     if (arr[index] > maxNum) {
//       maxNum = arr[index];
//     }
//   }
//   return maxNum;
// }


// let arr = [3, 4, 5, 6, 2, 1, 4, 5, 7];
// console.log(max(arr));

// function sum(arr) {
//   let num = 0;

//   for (let index = 0; index < arr.length; index++) {
//     num += arr[index];

//     console.log(num, index);
//   }
//   return num;
// }

// let arr = [1, 2, 4, 65, 7, 87, 1];

// // let mobile = arr.slice(1,3) // 1 = start and 3 = end 

// // console.log(mobile)


// let mob = arr.splice(2, 0, 'a','b') //  2- start - at which we start changing the array.
//                                // 4 - deleteCount - the number of elements to remove.

// console.log(mob)
// console.log(arr)



// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     console.log(element)
    
// }

