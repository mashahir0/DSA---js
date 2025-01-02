class Node{
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    insert(data){
        this.head = new Node(data,this.head)
        this.size++
    }
    print(){
        let current = this.head
         while(current){
            console.log(current.data)
            current = current.next
         }
    }
    removeMiddle(){
        let current = this.head 
        let count = 0
        let prev

        while(count <Math.floor(this.size/2)){
            count++
            
            prev = current 
            current = current.next 
           
        }
        prev.next = current.next
    }

    printrev(node = this.head){
        if(node  === null ) return
        this.printrev(node.next)
        console.log(node.data)
    }
}

const ll =new LinkedList()


ll.insert(200)
ll.insert(300)
ll.insert(100)

ll.removeMiddle()
ll.printrev()

