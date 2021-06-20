//piece of data - val
//reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


// let first = new Node('Hi');
// first.next = new Node ('there');
// first.next.next = new Node ('how');
// first.next.next.next = new Node ('are');
// first.next.next.next = new Node ('you');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

let list = new SinglyLinkedList();
console.log(list)