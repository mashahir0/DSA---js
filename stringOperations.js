// reverce a string 

function rev(str){
    let reverced = str.split('').reverse().join('')
    console.log(reverced);
    
}

rev('hai')


// longest word 

function longword(str){
    let words = str.split(' ')
    let long = ''
    for(let char of words){
        if(char.length > long.length){
            long = char
        }
    }
    console.log(long)
}

longword('hello hi mashahir')

//removeDuplicates


function removeDuplicates(str) {
    const seen = new Set();
    let result = "";

    for (let char of str) {
        if (!seen.has(char)) {
            result += char;
            seen.add(char);
        }
    }

    return result;
}

console.log(removeDuplicates("programming")); 
