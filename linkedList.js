// class Node{
//     constructor(data , next = null ){
//         this.data = data
//         this.next = next 
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     // To insert new node into linkedlist (First)
//     insertNode(data){
//         this.head = new Node(data , this.head)
//         this.size++
//     }

//     // To insert Last to the linkedlist 
//     insertLast(data){
//         let node = new Node(data)
//         let current 
//         if(!this.head){
//             this.head = node 
//         }else{
//             current = this.head 
//             while(current.next){
//                 current = current.next
//             }
//             current.next = node 
//         }
//         this.size++
//     }

//     // To insert at n
//     insertAt(data, index){
//         if(index > 0 && index > this.size){
//             return 
//         }
//         // if it is first index 
//         if(index === 0 ){
//             this.head = new Node(data,this.head)
//             return
//         }
        
//         const node = new Node(data)
//         let current,previous 
        
//         current = this.head 
//         let count = 0
        
//         while(count<index){
//             previous = current 
//             count++
//             current = current.next 
//         }
//         node.next = current 
//         previous.next = node 
//         this.size++
//     }

//     // To get index 
//     getAt(index){
//         let current = this.head
//         let count = 0
        
//         while(current){
//             if(count === index){
//                 console.log(current.data)
//             }
//             count++
//             current = current.next
//         }
//         return null
//     }

//     // remove at 
//     removeAt(index){
//         if(index > 0 && index > this.size){
//             return 
//         }
//         let current = this.head
//         let count = 0
//         let previous 

//         if(index === 0){
//             this.head = current.next
//         }else{
//             while(count < index){
//                 count++
//                 previous = current
//                 current = current.next

//             }
//             previous.next = current.next
//         }
//         this.size--

//     }
//     // To print the data from linkedlist 
//     toGetValue(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
    
//     // to clear list 
//     clearList(){
//         this.head = null 
//         this.size = 0
//         console.log('everything is cleared')
//     }
    
// }

// const ll = new LinkedList()
// ll.insertNode(100)
// ll.insertNode(200)
// ll.insertNode(300)
// // ll.insertLast(400)
// // ll.insertAt(500,1)
// // ll.getAt()
// // ll.removeAt(2)
// ll.clearList()
// ll.toGetValue()
// // console.log(ll)



// class Node{
//     constructor(data,next = null ){
//         this.data = data
//         this.next = next 
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null 
//         this.size = 0 
//     }

//     insert(data){
//         this.head = new Node(data, this.head)
//         this.size ++
//     }

//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
//     insertLast(data){
//         const node = new Node(data)
//         if(!this.head){
//             this.head  = node 
//         }else{
//             let current = this.head 
//             while(current.next){
//                 current = current.next 
//             }
//             current.next = node 
//         }
//         this.size++
//     }
//     printRev(node = this.head){
//         if(node === null) return 
//         this.printRev(node.next)
//         console.log(node.data)
//     }
//     findAt(index){
//         let val = this.head
//         let count =0
//         while(val){
            
//             if(index === count){
//                 return console.log(val.data);
//             }
//             count++
//             val = val.next 
//         } 
//         return console.log('not found ');
        
//     }
//     findSize(){
//         return console.log(this.size);
        
//     }
//     deleteAt(index){
//         let current = this.head 
//         let prev 
//         let count = 0

//         if(index === 0 ){
//             this.head = current.next
//         }else{
//             while(count< index ){
//                 count++
//                 prev = current
//                 current = current.next 
//             }
//             prev.next = current.next
//             this.size--
//         }
//     }
//     insertAt(index,data){
//         let current = this.head 
//         let prev 
//         let count =0 
//         const node = new Node(data)
//         if(index === 1){
//             this.head = new Node(data , this.head) 
//         }
//         while(count<index){
//             count++
//             prev = current
//             current = current.next
//         }
//         node.next = current
//         prev.next = node 
//         this.size++
//     }
    
    
// }


// function arrayToLinkedList(arr){
//     let linkl = new LinkedList()
//     for(let val of arr){
//         linkl.insert(val)
//     }
//     return linkl.print()
// }

// const ll = new LinkedList()
// ll.insert(100)
// ll.insert(200)
// ll.insert(300)
// ll.insert(400)
// // ll.deleteAt(2)
// ll.insertAt(2,500)
// ll.print()
// // ll.findAt(1)
// // ll.findSize()
// // ll.printRev()
// arrayToLinkedList([1,3,5,6])


// class Node{
//     constructor(data , next = null){
//         this.data = data
//         this.next = next
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     insert(data){
//         this.head = new Node(data , this.head)
//         this.size++
//     }
//     insertLast(data){
//         let node = new Node(data)
//         let current = this.head
//         while(current.next){
//             current = current.next 
//         }
//         current.next = node 
//         this.size++
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
//     deleteAt(index){
//         let current = this.head
//         let previous
//         let count =0
//         if(index === 0){
//             this.head = current.next
//         }else{
//             while(count<index){
//                 count++
//                 previous = current
//                 current = current.next
//             }
//             previous.next = current.next
//             this.size--
//         }
//     }
//     insertAt(index,data){
//         let node = new Node(data)
//         let prev 
//         let count = 0
//         let current = this.head
//         if(index === 0 ){
//             this.head = new Node(data,this.head)
//         }else{
//             while(count<index){
//                 count++
//                 prev = current
//                 current = current.next 
//             }
//             node.next = current
//             prev.next = node 
//             this.size++
//         }
//     }
//     revprint(node = this.head){
//         if(node === null) return
//         this.revprint(node.next)
//         console.log(node.data);
        
        
//     }
// }

// // function arrtoll(arr){
// //     let arrll = new linkedlist()
// //     for(let val of arr){
// //         arrll.insert(val)
// //     }
// //     return arrll.print()
// // }

// const ll = new linkedlist()

// ll.insert(100)
// ll.insert(200)
// ll.insertLast(300)
// ll.insertAt(2,1000)
// ll.deleteAt(1)
// // ll.print()
// // console.log(arrtoll([1,2,3,4]))
// ll.revprint()

// class Node{
//     constructor(data,next = null){
//         this.data = data
//         this.next = next
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null 
//         this.size = 0
//     }
//     insert(data){
//         this.head = new Node(data , this.head)
//         this.size++
//     }
//     lastIns(data){
//         let current = this.head
//         let prev
//         let node = new Node(data)
//         if(!this.head){
//             this.head = new Node(data , this.head)
//         }else{
//             while(current){
                
//                 current = current.next
//             }
//             current.next = node 
            
//         }
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
//     rev(node = this.head){
//         if(node === null) return 
//         this.rev(node.next)
//         console.log(node.data);
         
//     }
//     insAt(ind , data){
//         let node = new Node(data)
//         let current = this.head
//         let prev
//         let count =0
//         if(ind === 0){
//             this.head = new Node(data , this.head)
//             return
//         }
//         while(count < ind){
//             count++
//             prev = current
//             current = current.next 
//         }
//         node.next = current
//         prev.next = node 
//         this.size++
//     }
//     deleteat(ind){
//         let current = this.head
//         let prev
//         let count =0
//         if(ind ===0){
//             this.head = current.next
//             return
//         }else{
//             while(count<ind){
//                 count++
//                 prev = current
//                 current  = current.next 
//             }
//             prev.next = current.next
//             this.size--
//         }
//     }
// }

// let ll = new LinkedList()
// ll.insert(199)
// ll.insert(299)
// ll.insAt(0,400)
// // ll.print()
// ll.deleteat(2)
// ll.rev()


class Node{
    constructor(data,next = null){
        this.data = data 
        this.next = next 
    }
}

class LL{
    constructor(){
        this.head = null
        this.size = 0
    }
    insert(data){
        this.head = new Node(data,this.head)
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next
            
        }
    }
    insertAt(index,data){
        let node = new Node(data)
        let current = this.head 
        let prev 
        let count = 0
        while(count < index){
            prev = current
            current = current.next
            count++
        }
        node.next = current
        prev.next = node 
        this.size++
    }
    deleteAt(index){
        let current = this.head
        let prev
        let count = 0
        while(count < index){
            count++
            prev = current 
            current = current.next 
        }
        prev.next = current.next
        this.size--

    }
}


const ll = new LL()
ll.insert(100)
ll.insert(200)
ll.insertAt(2,300)
ll.deleteAt(1)
ll.print()