class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
      this.tail.prev = oldTail;
    }
    this.length ++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let oldTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length --;
    return oldTail;
  }

  shift() {
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null
    }
    this.length --;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
      oldHead.prev = this.head;
    }
    this.length ++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let count
    let current
    if((this.length / 2) >= index) {
      count = this.length - 1;
      current = this.tail;
      while(count !== index) {
        current = current.prev;
        count --;
      }
     } else {
      count = 0;
      current = this.head;
      while(count !== index) {
        current = current.next;
        count ++;
      }
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if(node) {
      node.val = val;
      return true;
    } 
    return false;
  }

  insert(val, index) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    let nodeFound = this.get(index - 1);
    let newNode = new Node(val);
    let nextNode = nodeFound.next;
    nodeFound.next = newNode;
    newNode.prev = nodeFound;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length ++;
    return true;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.pop();
list.shift();
// console.log('the new list', list)
list.unshift(3);
list.unshift(4);
list.push(78);
// console.log('the new list1', list)
// console.log('get at index 1', list.get(1))
// list.set(1, 100)
// console.log('the new list2', list.get(1))
list.insert(200, 2)
console.log(list)
