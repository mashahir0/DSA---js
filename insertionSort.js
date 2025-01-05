// function insertio(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j] > key){
//             arr[j+1] =arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }

// console.log(insertio([5,2,7,3,9]))


// function insertion(arr){
//     for(let i =1;i<arr.length;i++){
//         let current = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1 ]= current
//     }
//     return arr
// }


// console.log(insertion([3,7,1,5,8]));

function insertion(arr){
    for(let i =1;i<arr.length;i++){
        let current = arr[i]
        let j = i-1
        while(arr[j]>=0 && arr[j]> current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}

console.log(insertion([3,7,1,5,8]));