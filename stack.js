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

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.peak())
console.log(stack.pop());
console.log(stack.size());

