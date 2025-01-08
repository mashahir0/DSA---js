// class Queue{
//     constructor(){
//         this.items = []
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     front(){
//         return this.items[0]
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     size(){
//         return this.items.length 
//     }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.front()); 
// console.log(queue.dequeue()); 
// console.log(queue.size());

class Node{
    constructor(data,next= null){
        this.data = data
        this.next= next 
    }
}

class queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    add(val){
        let  node = new Node(val)
        if(this.rear){
            this.rear.next = node
        }
        this.rear = node
        if(!this.front){
            this.front  = node
        }
        this.size++
    }
    dequeue(){
        let val = this.front.data
        this.front = this.front.next
        if(!this.front){
            this.rear = null
        }
        this.size--
        return val
    }
    peak(){
        return this.item.data
    }

}

const que = new queue()
que.add(10)
que.add(20)
que.add(30)
console.log(que.dequeue());








