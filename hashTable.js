// class HashTable{
//     constructor(size = 50){
//         this.buckets = new Array(size)
//         this.size = size 
//     }
//     hash(key){
//         let hash = 0
//         for(let char of key){
//             hash+=char.charCodeAt(0)
//         }
//         return hash % this.size
//     }
//     set(key , value){
//         let index = this.hash(key)
//         if(!this.buckets[index]) this.buckets[index] = []
//         for(let [k,v] of this.buckets[index]){
//             if(k===key){
//                 v= value
//                 return
//             }
//         }
//         this.buckets[index].push([key,value])
//     }
//     get(key){
//         const index = this.hash(key)
//         const buckets = this.buckets[index]
//         if(!buckets) return undefined
//         for(let [k,v] of buckets){
//             if(k === key){
//                 return v
//             }
//         }
//         return undefined
//     }
//     getAllKey(){
//         let keys = []
//         for(let i =0 ;i<this.buckets.length;i++){
//             if(this.buckets[i]){
//                 for(let [k] of this.buckets[i]){
//                     keys.push([k])
//                 }
//             }
//         }
//         return keys
//     }
//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.buckets[index]
//         if(!bucket) return false
//        for(let i =0;i<bucket.length;i++){
//         if(bucket[i][0] === key){
//             bucket.splice(i,1)
//         }
//        }
//        return false
//     }
// }

// const table = new HashTable(10)
// table.set('name','Mashahir')
// table.set('age',21)
// table.set('phone',77777)
// table.remove('age')

// console.log(table.get('age'))
// console.log(table.get('name'))
// console.log(table.get('phone'))
// console.log(table.getAllKey());



class HashTable{
    constructor(size = 50){
        this.bucket = new Array(size)
        this.size =size
    }
    hash(key){
        let hash = 0
        for(let char of key){
            hash += char.charCodeAt(0)
        }
        return hash % this.size
    }
    set(key,value){
        let index = this.hash(key)
        if(!this.bucket[index])  this.bucket[index] = [];
        for(let [k ,v] of this.bucket[index] ){
            if(k=== key){
                v = value
            }
        }
        this.bucket[index].push([key,value])
                            
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.bucket[index]
        if(!bucket) return undefined
        for(let [k,v] of bucket){
            if(k===key){
                return v
            }
        }
    }
    delete(key){
        let index = this.hash(key)
        let bucket = this.bucket[index]
        for(let i = 0;i<bucket.length;i++){
            if(bucket[i][0] === key){
                bucket.splice(i,1)
            }
        }
    }
    allKeyAndVal(){
        let arr = []
        let bucket = this.bucket
        for(let i =0;i<bucket.length;i++){
            if(bucket[i]){
                for(let [key,val] of bucket[i]){
                    arr.push([key,val])
                }
            }
        }
        return arr
    }
}


const ht = new HashTable(10)
ht.set('name','mashahir')
ht.set('mane','mashahri')
ht.set('age',21)
ht.set('address','malappuram')
console.log(ht.allKeyAndVal())


