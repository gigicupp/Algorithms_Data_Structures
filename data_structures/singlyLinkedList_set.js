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

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length --;
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length --;
    if(!this.length) {
      this.tail = null;
      this.head = null;
    }
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length ++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      counter ++;
      current = current.next;
    }
    return current;
  }

  //changing the value of a node at index
  set(index, val) {
    let found = this.get(index);
    if(found) {
      found.val = val;
      return true;
    } 
    return false;
  }
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.unshift(0);

console.log(list.get(2));
