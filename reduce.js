// let arr = [1,2,3,4,5,6,7,8];

// const sum = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(sum)


// const arr = [[1,2],[3,4],[5,6],[7,8]];


// const flat = arr.reduce((acc, curr) => {

//     return acc.concat(curr);
// }, []);

// console.log(flat)

// const fname = "Himanshu"
// const lname = "Chauhan"

// const jod_raha_hu = fname.concat(lname);

// console.log(jod_raha_hu)

const arr = ["himanshu","chauhan","saket","Sooraj"];

const stringConcat = arr.reduce((acc,curr) => {
    return acc  + curr;
}, []);

console.log(stringConcat)