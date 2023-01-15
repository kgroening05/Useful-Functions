// Create a balanced binary search tree
// buildTree Pseudocode:
// 0- Start with sorted array (with no duplicated values)
// 1- initialize start = index 0, end = length of array -1
// 2- find midpoint: mid = (start+end/2) rounded down
// 3- Recursively:
// 3a- calculate midpoint of left subarray, make it root of left subtree of A
// 3b- calculate midpoint of right subarray make it root of right subtree of A
// 4- repeat for left subarray and right subarray until start > end

// insert pseudocode:
// 1- Start from root
// 2- compare new value to insert with the root
// 2a - if less than root, then recursively call left subtree
// 2b - if greater than root, then recursivelt call right subtree
// 3- after reaching the end: 
// 3a - insert new node at left if less than current
// 3b - insert new node at right if greater than current


// delete pseudocode:
// 1- Start from root
// 2- compare value with root value until match is found
// 2a - if less than root value, move recursively left
// 2b - if greater than root valye, move recursively right
// 3- when a match is found:
// 3a - If the node is a leaf:
// 3a --- Remove it from the tree by removing the reference to it from the root node
// 3b - If the node has only one child:
// 3b --- Copy the child value to the root node and delete the child as in 3a
// 3c - If the node has two children:
// 3c --- Find inorder successor of the node (thing that's next biggest):
// 3c ----- Go to the right subtree of the node, then keep going left until you can't anymore
// 3c ----- Make that new item the new root node. if the new item had right children, follow 3b


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

    insert(value, rootNode = this.root){
        if (value < rootNode.value){
            if (rootNode.left === null){
                rootNode.left = new Node(value)
            } else {
                this.insert(value, rootNode.left)
            }
        } else if (value > rootNode.value){
            if (rootNode.right === null){
                rootNode.right = new Node(value)
            } else {
                this.insert(value, rootNode.right)
            }
        }
    }
    delete(value){
        this.root = this.#removeNode(value, this.root)
    }

    #removeNode(value, root){
        // base case
        if (root === null) return root

        // equality found
        if (value === root.value){
            // check if the node is a leaf or has one child
            if (root.left === null && root.right === null){
                return null
            } else if (root.left === null){
                return root.right
            } else if (root.right === null){
                return root.left
            } else {
                // the node must have 2 children
                // find inorder successor
                root.value = this.#findInorderSuccessor(root.right)
                // delete inorder successor
                root.right = this.#removeNode(root.value, root.right)
                return root
            }
        }
        
        // equality not found, recur down the tree
        if (value > root.value){
            root.right = this.#removeNode(value, root.right)
            return root
        } else if (value < root.value){
            root.left = this.#removeNode(value, root.left)
            return root
        }
    }
    #findInorderSuccessor(node){
            if (node.left === null){
                return node.value
            }
            return this.#findInorderSuccessor(node.left)
    }  
    
    find(value){
        return this.#findRec(value, this.root)
    }
    
    #findRec (value, root){
        if (value === root.value){
            return root
        }else if (value < root.value){
            if (root.left !== null){
                return this.#findRec(value, root.left)
            }
        } else if (value > root.value){
            if (root.right !== null){
                return this.#findRec(value, root.right)
            }
        }
    }
    // note: use linked list for searchQueue if BST is expected to be large
    levelOrderMap(runFunction = null){
        let searchQueue = [this.root]
        if(runFunction === null){
            let collectionArray = []
            while(searchQueue.length > 0){
                const nextNode = searchQueue.shift()
                collectionArray.push(nextNode.value)
                if(nextNode.left !== null){
                    searchQueue.push(nextNode.left)
                }
                if(nextNode.right !== null){
                    searchQueue.push(nextNode.right)
                }
            }
            return collectionArray
        } else {
            while(searchQueue.length > 0){
                const nextNode = searchQueue.shift()
                runFunction(nextNode)
                if(nextNode.left !== null){
                    searchQueue.push(nextNode.left)
                }
                if(nextNode.right !== null){
                    searchQueue.push(nextNode.right)
                }
            }
        }
    }

    inOrderMap(runFunction = null){ // left, root, right
        if(runFunction !== null){
            _addNextNode(this.root, runFunction)
        } else {
            let searchStack = []
            _addNextNode(this.root, (node) => {
                searchStack.push(node.value)
            })
            return searchStack
        }
        function _addNextNode(root, runFunction){
            if (root === null) return
            _addNextNode(root.left, runFunction)
            runFunction(root)
            _addNextNode(root.right, runFunction)
        }
    }
}
const testArray = [1, 2, 4, 8, 10, 15, 16, 18, 30, 35, 40, 41, 60, 75, 100]
const myTree = new Tree(testArray)
// prettyPrint(myTree.root)
console.log(myTree.inOrderMap())

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
