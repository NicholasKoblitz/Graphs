class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let node of this.nodes) {
      if(node.adjacent.has(vertex)) node.adjacent.delete(vertex)
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let currentStack = [start];
    let seen = new Set(currentStack)
    let nodeArr = []

    while(currentStack.length) {
      let current = currentStack.pop();
      nodeArr.push(current.value);

      for (let neighbor of current.adjacent) {
        if (!seen.has(neighbor)) {
          currentStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    console.log(nodeArr)
    return nodeArr;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let currentQueue = [start];
    let seen = new Set(currentQueue)
    let nodeArr = []

    while(currentQueue.length) {
      let current = currentQueue.shift();
      nodeArr.push(current.value);

      for (let neighbor of current.adjacent) {
        if (!seen.has(neighbor)) {
          currentQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    console.log(nodeArr)
    return nodeArr;
  }
}

module.exports = {Graph, Node}