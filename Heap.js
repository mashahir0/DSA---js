//Min-Heap

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeftChildIndex(index){
//         return 2*index+1
//     }
//     getRightchildIndex(index){
//         return 2*index+2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
//     }
//     insert(val){
//         this.heap.push(val)
//         this.heapfyUp(this.heap.length-1)
//     }
//     heapfyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[index]<this.heap[parentIndex]){
//             this.swap(index,parentIndex)
//             index = parentIndex
//             parentIndex =this.getParentIndex(index)
//         }
//     }
//     remove(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop()
//         const root = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapfyDown(0)
//         return root
//     }
//     heapfyDown(index){
//         let smallest  = index
//         let leftIndex = this.getLeftChildIndex(index)
//         let rightIndex = this.getRightchildIndex(index)
//         if(leftIndex <this.heap.length && this.heap[leftIndex] < this.heap[smallest]){
//             smallest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]){
//             smallest = rightIndex
//         }
//         if(smallest != index){
//             this.swap(index ,smallest)
//             this.heapfyDown(smallest)
//         }
//     }
//     buildHeap(arr){
//         this.heap = arr
//         for(let i = Math.floor(this.heap/2)-1;i>=0;i--){
//             this.heapfyDown(i)
//         }
//     }
//     getHeap(){
//         return this.heap
//     }
// }


// const minHeap = new MinHeap()

// minHeap.insert(10)
// minHeap.insert(20)
// minHeap.insert(30)
// minHeap.insert(40)
// minHeap.insert(50)
// console.log(minHeap.remove())

// console.log('after removal',minHeap.getHeap());



//Max-Heap


class MaxHeap{
    constructor(){
        this.heap = []
    }
    findParentIndex(index){
        return Math.floor((index-1)/2)
    }
    findLeftIndex(index){
        return 2*index+1
    }
    findRightIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    insert(val){
        this.heap.push(val)
        this.heapfyUp(this.heap.length-1)
    }
    heapfyUp(index){
        let parentIndex = this.findParentIndex(index)
        while(index > 0 && this.heap[index] > this.heap[parentIndex]){
            this.swap(index,parentIndex)
            index = parentIndex
            parentIndex  = this.findParentIndex(index)
        }
    }
    remove(){
        if(this.heap.length === 0) return null
        if(this.heap.length  === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapfyDown(0)
        return root
    }
    heapfyDown(index){
        let largest = index
        let leftIndex = this.findLeftIndex(index)
        let rightIndex = this.findRightIndex(index)
        if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largest]){
            largest = leftIndex
        }
        if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largest]){
            largest = rightIndex
        }
        if(largest != index){
            this.swap(index,largest)
            this.heapfyDown(largest)
        }
    }
    buildHeap(arr){
        this.heap = arr
        for(let i = Math.floor((this.heap.length-1)/2);i>=0;i--){
            this.heapfyDown(i)
        }
    }
    getHeap(){
        return this.heap
    }
}

const maxheap =new MaxHeap()
maxheap.insert(10);
maxheap.insert(5);
maxheap.insert(20);
maxheap.insert(2);
maxheap.insert(3)
maxheap.insert(1)
console.log(maxheap.remove());


console.log(maxheap.getHeap());

maxheap.buildHeap([3, 17, 8, 10, 25, 6]);
console.log(maxheap.getHeap());



