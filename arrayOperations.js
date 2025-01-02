// find Largest and second largest 

function Largest(arr){
    let larg = arr[0]
    let  second = -Infinity
    let thirdlarg = -Infinity
    for(let i =0 ;i<arr.length;i++){
        if(arr[i]>larg){
            second = larg
            larg = arr[i]
        }else if(arr[i] > second && arr[i] != larg ){
            thirdlarg= second
            second = arr[i]
        }else if(arr[i] > thirdlarg && arr[i] != larg && arr[i] != second){
            thirdlarg = arr[i]
        }
    }
    console.log(`largest :${larg}`);
    console.log(`second largest :${second}`);
    console.log(`third  largest :${thirdlarg}`);

    
    
}

Largest([110,2,32,4,56,33])

// find smallest and second smallest 

function smallest(arr){
    let small = Infinity
    let second = Infinity
    let thirdsmall = Infinity
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<small){
            second = small
            small = arr[i]
        }else if(arr[i]< second && arr[i] != small){
            thirdsmall = second
            second = arr[i]
        }else if(arr[i] < thirdsmall && arr[i] != small && arr[i] != second){
            thirdsmall = arr[i]
        }
    }
    console.log(`smallest :${small}`);
    console.log(`second samllest :${second}`);
    console.log(`third smallest :${thirdsmall}`);

    
    
}

smallest([110,2,32,4,56])
