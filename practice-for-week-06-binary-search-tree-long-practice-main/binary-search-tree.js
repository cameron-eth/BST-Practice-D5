class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode = this.root) {
    // Your code here
    const newNode = new TreeNode(val);

    if (this.root === null) {
      this.root = newNode;
    } else {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this.insert(val, currentNode.left);
        }
      } else if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }
  }
  search(val) {
    let searchNode = this.root;
    while (true) {
      if (!searchNode) return false;

      if (val === searchNode.val) return true;

      if (val > searchNode.val) {
        searchNode = searchNode.right;
      } else {
        searchNode = searchNode.left;
      }
    }
  }



  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
    return;

  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode !== null) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
    return;
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode !== null) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
    return;
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    //Put the starting node in a queue
    let newQueue = [];
    newQueue.push(this.root);

    while (newQueue.length > 0) {

      let currentNode = newQueue.shift();
      console.log(currentNode.val)

      if (currentNode.left) {
        newQueue.push(currentNode.left)
      }
      if (currentNode.right) {
        newQueue.push(currentNode.right)
      }
    }
    //While the queue is not empty, repeat steps 3-4
    //Dequeue a node and print it
    //Put all of the node's children in the back of the queue

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    // Stack
    let newStack = [];
    newStack.unshift(this.root);

    while (newStack.length > 0) {
      let currentNode = newStack.pop()
      console.log(currentNode.val);

      if (currentNode.left) {
        newStack.push(currentNode.left);
      }
      if (currentNode.right) {
        newStack.push(currentNode.right);
      }
    }
  }
}

/*
Pre-order traversal: Process the root node first,
then recursively process the
left subtree and finally the right subtree.

In-order traversal: Recursively process the left subtree,
then the root node,
and finally the right subtree.

Post-order traversal: Recursively process the left subtree,
then the right subtree,
and finally the root node.  ?

*/

module.exports = { BinarySearchTree, TreeNode };
// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here