function quickSort(arr){
    if(arr.length <=1) return arr
    let last = arr[arr.length-1]
    let right = []
    let left = []
    for(let i =0;i<arr.length -1;i++){
        if(arr[i]<last){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),last,...quickSort(right)]
}

console.log(quickSort([2,6,1,8,3]))



