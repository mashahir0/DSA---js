// liner search 

function liner(arr,target){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===target){
            console.log(i) 
        }
    }
}

liner([1,2,3,4,5],4)


//binary search 

function binarySearch(arr,target){
    let left =0
    let right = arr.length-1
    while(left<=right){
        let mid = Math.floor((right+left)/2)
        if(target===arr[mid]){
            return mid
        }
        if(target<arr[mid]){
            right = mid -1  
        }else{
            left = mid + 1
        }
    }
}

console.log(binarySearch([1,2,3,4,5],5))


// binary recursive search 


function binaryRec(arr,target,left = 0 ,right = arr.length - 1 ){
    if(left > right ){
        return -1 
    }
    let mid = Math.floor((left + right )/2)
    if(target === arr[mid]){
        return mid 
    }
    if(target<arr[mid]){
        return binaryRec(arr,target,left,mid -1 )
    }else{
        return binaryRec(arr,target,mid +1 ,right)
    }
}

console.log(binaryRec([1,2,3,4,5],3))





