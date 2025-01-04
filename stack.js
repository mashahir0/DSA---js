class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()) return 'this stack is empty'
        return this.items.pop()
    }
    peak(){
        if(this.isEmpty()) return 'this stack is empty'
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length === 0
    }
}

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.peak())
// console.log(stack.pop());
// console.log(stack.size());


// stach using linked list 


class Node {
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}
class items{
    constructor(){
        this.top = null
        this.size = 0
    }
    push(value){
        this.top = new Node(value, this.top)
        this.size++
    }
    pop(){
        if(this.isEmpty()) return 'empty'
        let val = this.top.data
        this.top = this.top.next
        return val
    }
    peak(){
        return this.top.data
    }
    isEmpty(){
        return this.size ===0
    }
}

const stack = new items()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(`item removed : ${stack.pop()}`);


console.log(stack.peak());



