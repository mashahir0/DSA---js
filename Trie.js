class TrieNode{
    constructor(){
        this.children = {}
        this.endWord = false
    }
}

class Trie{
    constructor() {
        this.root =new TrieNode()
    }
    insert(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.endWord = true
    }
    search(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return current.endWord
    }
    startwith(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return true
    }
}

const trie = new Trie()

trie.insert('apple')
trie.insert('banana')
trie.insert('grap')

console.log(trie.search('banna'));
console.log(trie.startwith('app'));

