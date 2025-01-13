class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1) 
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex]){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    getGraph(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,'->',this.adjacencyList[vertex]);
            
        }
    }
    bfs(start){
        let result = []
        let queue = [start]
        let visited = new Set()
        visited.add(start)

        while(queue.length){
            let vertex = queue.shift()
            result.push(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
        return result
    }
    dfs(start,visited =new Set(),result =[]){
        visited.add(start)
        result.push(start)
        for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited,result)
            }
        }
        return result
    }
}

const graph = new Graph()
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');


graph.getGraph()

console.log("BFS Traversal starting from A:", graph.bfs('A'));
console.log("DFS Traversal (Recursive) starting from A:", graph.dfs('A'));
