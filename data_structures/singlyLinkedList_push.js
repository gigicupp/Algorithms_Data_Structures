class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add to the end of
  push(val) {
    //create a new node;
    let node = new Node(val);
    //if there is no head
    if(!this.head) {
      //set the head and the tail to be the newly created node.
      this.head = node;
      this.tail = this.head;
    } else {
      //otherwise set the next prop on the existing tail to be the new node
      this.tail.next = node;
      //make the new node to be the new tail
      this.tail = node;
    }
    //increment the size of the list
    this.length ++;
    //return the list
    return this;
  }
}

let test = new SinglyLinkedList();
console.log(test);

test.push('Hello');
test.push('my list');
console.log(test);