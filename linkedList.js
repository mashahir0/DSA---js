class Node{
    constructor(data , next = null ){
        this.data = data
        this.next = next 
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    // To insert new node into linkedlist (First)
    insertNode(data){
        this.head = new Node(data , this.head)
        this.size++
    }

    // To insert Last to the linkedlist 
    insertLast(data){
        let node = new Node(data)
        let current 
        if(!this.head){
            this.head = node 
        }else{
            current = this.head 
            while(current.next){
                current = current.next
            }
            current.next = node 
        }
        this.size++
    }

    // To insert at n
    insertAt(data, index){
        if(index > 0 && index > this.size){
            return 
        }
        // if it is first index 
        if(index === 0 ){
            this.head = new Node(data,this.head)
            return
        }
        
        const node = new Node(data)
        let current,previous 
        
        current = this.head 
        let count = 0
        
        while(count<index){
            previous = current 
            count++
            current = current.next 
        }
        node.next = current 
        previous.next = node 
        this.size++
    }

    // To get index 
    getAt(index){
        let current = this.head
        let count = 0
        
        while(current){
            if(count === index){
                console.log(current.data)
            }
            count++
            current = current.next
        }
        return null
    }

    // remove at 
    removeAt(index){
        if(index > 0 && index > this.size){
            return 
        }
        let current = this.head
        let count = 0
        let previous 

        if(index === 0){
            this.head = current.next
        }else{
            while(count < index){
                count++
                previous = current
                current = current.next

            }
            previous.next = current.next
        }
        this.size--

    }
    // To print the data from linkedlist 
    toGetValue(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    
    // to clear list 
    clearList(){
        this.head = null 
        this.size = 0
        console.log('everything is cleared')
    }
    
}

const ll = new LinkedList()
ll.insertNode(100)
ll.insertNode(200)
ll.insertNode(300)
// ll.insertLast(400)
// ll.insertAt(500,1)
// ll.getAt()
// ll.removeAt(2)
ll.clearList()
ll.toGetValue()
// console.log(ll)



