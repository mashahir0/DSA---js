// // function printNums(n){
// //     if(n===0) return 0
// //     return n + printNums(n-1)
// // }

// // console.log(printNums(5))

// //factorial 

// function factorial(n){
//     if(n===0 || n===1) return 1
//     return n * factorial(n-1)
// }

// console.log(factorial(5))

// //sum of array 

// function sumArray(arr){
//     if(arr.length === 0 ) return 0
//     return arr[0] + sumArray(arr.slice(1))
// }

// console.log(sumArray([1,3,4,5]))

// // to reverce a string 

// function rev(str){
//     if(str.length<=1) return str
//     return rev(str.slice(1)) + str[0]

// }

// console.log(rev('hai'))




function factorial(n){
    if(n<=1) return 1
    return n* factorial(n-1)
}

console.log(factorial(5))

function asum(arr){
    if(arr.length === 0) return 0
    return arr[0] + asum((arr.slice(1)))
}

console.log(asum([1,2,3,4,5]));

function rev(str){
    if(str.length <= 1) return str
    return rev((str.slice(1)))+ str[0]
}

console.log(rev('hai'))