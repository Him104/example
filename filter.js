const arr = [1,2,3,4,5,6,7,8] 


const evenNo = arr.filter(checkingEven)


function checkingEven(arr)  {
return arr % 2 === 0
}

console.log(evenNo)