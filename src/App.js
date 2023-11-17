import { useState } from "react";
import MindNode from "./components/MindNode";

class Tree{
  constructor(){
    this.root = new Node(1,"test");
  }

  /* Tree data strcute example :
  *  
  * Tree :
  * 
  *   RootNode [
  *     ChildNode1 [
  *       ChildNode1.1 [
  *         ChildNode1.1.1[]
  *         ChildNode1.1.2[]
  *       ]
  *       ChildNode1.2 []
  *     ]
  *     
  *     ChildNode2 [
  *       ChildNode2.1[]
  *       ChildNode2.2[
  *         ChildNode2.2.1[]
  *       ]
  *     ]
  *   ]
  */

  traverse(callback){
    const arr = [this.root];
    //loop through array
    while(arr.length){
      //we take into consideration the first element, the 
      const node = arr.shift();
      //we now push the childens sub-tree into the array for next iterations
      arr.push(node.children)
      callback(node)
    }
  }


}

class Node {
  construcor(id, data) {
    this.id = id;
    this.data = data;
    this.children = [];
    this.width = 1;
  }

  add(id, data){
    this.children.push(new Node(id, data));
    this.width = this.children.length; // update the witdth of this node
  }

  remove(id){
    this.children = this.children.filter((node) => {
      return node.id !== id;
    });
    this.width = this.children.length; // update the witdth of this node
  }
}

function App() {
  //initialize tree
  const [tree, setTree] = useState(new Tree())
  console.log(tree.root)
  return (
    <div className="App">
      <MindNode id="1" content={"test"}></MindNode>
    </div>
  );
}

export default App;
