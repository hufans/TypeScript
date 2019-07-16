import { Dictionary } from "./direction";

export class Graph {
  vertices: any = []; //存储图中所有的顶点名字
  adjList = new Dictionary(); //用之前的一个字典来存储邻接表
  addVertex = function(v: any) {
    //添加顶点
    this.vertices.push(v);
    this.adjList.set(v, []); //顶点为键，字典值为空数组
  };
  addEdge = function(v: any, w: any) {
    //添加边
    this.adjList.get(v).push(w); //基于有向图
    this.adjList.get(w).push(v); //基于无向图
  };
  toString = function() {
    var s = "";
    for (var i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + " -> ";
      var neighbors = this.adjList.get(this.vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };
  initializeColor = function() {
    var color = [];
    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = "white";
    }
    return color;
  };

  //-----------------
  dfs = function(callback: Function) {
    var color = this.initializeColor(); //前面的颜色数组

    for (var i = 0; i < this.vertices.length; i++) {
      if (color[this.vertices[i]] === "white") {
        // color[A]
        this.dfsVisit(this.vertices[i], color, callback); //递归调用未被访问过的顶点
      }
    }
  };

  dfsVisit = function(u: any, color: any, callback: any) {
    color[u] = "grey";

    callback && callback(u);

    var neighbors = this.adjList.get(u); // 获取邻接点

    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];

      if (color[w] === "white") {
        this.dfsVisit(w, color, callback); //添加顶点w入栈
      }
    }
  };
}

var graph = new Graph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.toString());
console.log("------");

function printNode(value: any) {
  console.log("Visited vertex: " + value);
}

graph.dfs(printNode);
