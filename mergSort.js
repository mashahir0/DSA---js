function mergSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergSort(arr.slice(0,mid))
    let right = mergSort(arr.slice(mid))
    return merg(left,right)
}

function merg(left,right){
    let result = []
    let j =0 , i=0
    while(i< left.length && j< right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    return [...result,...left.slice(i),...right.slice(j)]
}

console.log(mergSort([5,8,2,9,1]));


// function mergSort(arr){
//     if(arr.length <= 1) return arr
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merg(left ,right)
// }

// function merg(left,right){
//     let result = []
//     let j=0 ,i=0
//     while(i< left.length && j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i])
//             i++
//         }else{
//             result.push(right[j])
//             j++
//         }
//     }
//     return [...result,...left.slice(i),...right.slice(j)]
// }

// console.log(mergSort([6,9,1,4,9]));
