class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
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
    this.head = oldHead.next;
    this.length --;
    if(!this.length) {
      this.tail = null;
    }
    return oldHead;
  }
}

let list = new singlyLinkedList();
list.push('1');
list.push('3');
list.push('5')

console.log(list.shift());
console.log(list)