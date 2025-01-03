class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length 
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); 
console.log(queue.dequeue()); 
console.log(queue.size());