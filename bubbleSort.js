function bubleSort(arr){
    let len = arr.length
    for(let i=0;i<len-1;i++){
        let swap = false
        for(let j=0;j<len-i-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swap = true
            }
        }
        if(!swap) break
    }
    return arr
}


console.log(bubleSort([5,3,8,6,2]));




