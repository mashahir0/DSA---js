function selectionSort(arr){
    let len = arr.length 
    for(let i =0;i<len-1;i++){
        let midIndex = i
        for(let j =i+1;j<len;i++){
            if(arr[j]<arr[midIndex]){
                midIndex = j
            }
        }
        [arr[i],arr[midIndex]] = [arr[midIndex],arr[i]]
    }
    return arr
}


console.log(selectionSort([4,2,7,3]))



