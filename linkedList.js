class LinkedList {
    #size
    #head
    #tail
    constructor(name) {
        this.name = name;
        this.#head = null;
        this.#tail = null;
        this.#size = null;
    }

    prepend(value){
        if(this.#head === null && this.#tail === null){
            this.#head = new Node (value)
            this.#tail = this.#head
            this.#size ++
        } else if(this.#head !== null){
            const oldHead = this.#head
            const newHead = new Node(value)
            oldHead.prevNode = newHead
            newHead.nextNode = oldHead
            this.#head = newHead
            this.#size ++
        } else {
            console.log('you missed something on prepend')
        }

    }

    append(value){
        if(this.#head === null && this.#tail === null){
            this.#head = new Node (value)
            this.#tail = this.#head
            this.#size ++
        } else if (this.#tail !== null) {
            const oldTail = this.#tail
            const newTail = new Node(value)
            oldTail.nextNode = newTail
            newTail.prevNode = oldTail
            this.#tail = newTail
            this.#size ++
        } else {
            console.log('you missed something on append')
        }
    }

    getSize(){
        return this.#size
    }


    getHead(){
        return this.#head.value
    }

    getTail(){
        return this.#tail.value
    }

    atIndex(index){
        if(index > this.#size) {
            console.log(`Index doesn't exist`)
            return
        }
        if(index === this.#size-1) {
            return this.#tail.value
        }
        if(index === 0) {
            return this.#head.value
        }
        if (index <= Math.floor(this.#size / 2)){ // start at head
            let node = this.#head
            for (let e = 0; e < index; e++) {
                node = node.nextNode
            }
            return node.value
        }        
        if (index > Math.floor(this.#size / 2)){ // start at tail
            let node = this.#tail
            for (let e = this.#size - 1 ; e > index; e--) {
                node = node.prevNode
            }
            return node.value
        }
    }

    pop(){
        const oldTail = this.#tail
        oldTail.prevNode.nextNode = null
        return oldTail.value
    }

    contains(value){
        if (this.#head == null){ 
            console.log('empty list')
            return
        }
        let currentNode = this.#head
        while(currentNode){
            if(currentNode.value === value){
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    find(value){
        if (this.#head == null){ 
            console.log('empty list')
            return
        }
        let currentNode = this.#head
        let indexNumber = 0
        while(currentNode){
            if(currentNode.value === value){
                return indexNumber
            }
            indexNumber++
            currentNode = currentNode.nextNode
        }
        return false
    }

    toString(){
        if (this.#head == null){ 
            console.log('empty list')
            return
        }
        let currentNode = this.#head
        let printArr = []
        while(currentNode){
            printArr.push(currentNode.value)
            currentNode = currentNode.nextNode
        }
        return printArr.join(' -> ')
    }

    insertAt(value, index = 0){
        if (this.#head == null && index > 0){ 
            console.log('empty list. inserting at index 0')
            this.append(value)
            return
        }
        if (index <= Math.floor(this.#size / 2)){ // start at head
            console.log('start at head')
            let node = this.#head
            for (let e = 0; e < index; e++) {
                node = node.nextNode
            }
        }        
        if (index > Math.floor(this.#size / 2)){ // start at tail
            console.log('start at tail')
            let node = this.#tail
            for (let e = this.#size - 1 ; e > index; e--) {
                node = node.prevNode
            }
        }
        const newNode = new Node(value)
        oldHead.prevNode = newHead
        newHead.nextNode = oldHead

    }

    removeAt(index){

    }

}

class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }
}

const myList = new LinkedList('myList')
myList.append('firstNode')
myList.append('aNewNode')
myList.append('anotherNewNode1')
myList.append('anotherNewNode2')
myList.append('anotherNewNode3')
myList.append('anotherNewNode4')
myList.append('anotherNewNode5')
myList.append('anotherNewNode6')
myList.append('anotherNewNode7')
myList.append('anotherNewNode8')
myList.append('anotherNewNode9')
myList.append('anotherNewNode10')
myList.append('anotherNewNode11')
myList.append('anotherNewNode12')
myList.append('anotherNewNode13')
myList.append('anotherNewNode14')
myList.append('anotherNewNode15')
myList.append('anotherNewNode16')
//console.log(myList.toString())
console.log(myList.find('anotherNewNode17'))



