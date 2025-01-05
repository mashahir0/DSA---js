// function quickSort(arr){
//     if(arr.length <=1) return arr
//     let last = arr[arr.length-1]
//     let right = []
//     let left = []
//     for(let i =0;i<arr.length -1;i++){
//         if(arr[i]<last){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),last,...quickSort(right)]
// }

// console.log(quickSort([2,6,1,8,3]))


// function quick(arr){
//     if(arr.length <= 1) return arr
//     let last = arr[arr.length-1]
//     let right = []
//     let left = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<last){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),last,...quick(right)]
// }

// console.log(quick([8,1,3,9,1]));


function quick(arr){
    if(arr.length <= 1) return arr
    let last = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]< last ){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),last,...quick(right)]
}

console.log(quick([6,8,1,9]));
