// Binary Tree implimentation and Traversal

class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    inorder(node){
        if(node){
            this.inorder(node.left)
            console.log(node.data);
            this.inorder(node.right)
        }
    }
    preorder(node){
        if(node){
            console.log(node.data);
            this.postorder(node.left)
            this.postorder(node.right)
            
        }
    }
    postorder(node){
        if(node){
            this.postorder(node.right)
            this.postorder(node.left)
            console.log(node.data);
            
        }
    }
    height(node){
        if(!node) return 0
        const leftLength = this.height(node.left)
        const rightLength = this.height(node.right)
        return Math.max(leftLength,rightLength) +1

    }

}

const  BinaryTree =  new Tree()
BinaryTree.root = new Node(1)
BinaryTree.root.left = new Node(2)
BinaryTree.root.right = new Node(3)
BinaryTree.root.left.left = new Node(4)
BinaryTree.root.left.right = new Node(5)
BinaryTree.root.left.left.left = new Node(6)


console.log('inorder traversal');
BinaryTree.inorder(BinaryTree.root)
console.log('preorder traversal');
BinaryTree.preorder(BinaryTree.root)
console.log('postorder traversal');
BinaryTree.postorder(BinaryTree.root)
console.log('height of the tree :',BinaryTree.height(BinaryTree.root));




// Binary Search Tree

// class Node{
//     constructor(data){
//         this.data = data
//         this.left = null;
//         this.right = null
//     }
// }

// class Bst{
//     constructor(){
//         this.root = null
//     }
//     insert(data){
//         const node = new Node(data)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)

//         }
//     }
//     insertNode(node , newNode){
//         if(newNode.data < node.data){
//             if(!node.left){
//                 node.left = newNode
//             }else{
//                 this.insertNode(node.left , newNode)
//             }
//         }else{
//             if(!node.right){
//                 node.right = newNode
//             }else{
//                 this.insertNode(node.right , newNode)
//             }
//         }
//     }
//     search(node,data){
//         if(!node) return false
//         if(data<node.data){
//             return this.search(node.left , data)
//         }else if(data > node.data){
//              return this.search(node.right , data)
//         }else{
//             return true
//         }
//     }
// }

// const bst = new Bst()
// bst.insert(1)
// bst.insert(2)
// bst.insert(3)
// bst.insert(4)
// bst.insert(5)

// console.log(bst.search(bst.root, 7));


