// Create a balanced binary search tree
// Pseudocode:
// 0- Start with sorted array (with no duplicated values)
// 1- initialize start = index 0, end = length of array -1
// 2- find midpoint: mid = (start+end/2) rounded down
// 3- Recursively:
// 3a- calculate midpoint of left subarray, make it root of left subtree of A
// 3b- calculate midpoint of right subarray make it root of right subtree of A
// 4- repeat for left subarray and right subarray until start > end

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(array){
        this.root = this.buildTree(array)
    }

    buildTree(array){
        const start = 0;
        const end = array.length - 1
        if (end < start) return null
        const midpoint = Math.floor((start + end)/2)
        const newNode = new Node(array[midpoint])
        newNode.left = this.buildTree(array.slice(start, midpoint))
        newNode.right = this.buildTree(array.slice(midpoint + 1))
        return newNode
    }

    insert(value){

    }

}

const testArray = [1, 2, 4, 8, 10, 15, 16, 18, 30, 35, 40, 41, 60, 75, 100]
const myTree = new Tree(testArray)
prettyPrint(myTree.root)

// recursive pretty print function for visualizing tree
function prettyPrint (node, prefix = '', isLeft = true){
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
