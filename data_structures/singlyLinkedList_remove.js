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
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next
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
    let current = this.head;
    let counter = 0;
    while(counter !== index) {
      counter ++;
      current = current.next;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    let newNode = new Node(val);
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length ++;
    return true;
  }

  remove(index) {
    //check if the index is valid
    if(index < 0 || index >= this.length) return undefined;
    //if index is 0, return shift
    if(index === 0) return this.shift();
    //if index is the last item, return pop
    if(index === this.length - 1) return this.pop();
    //find the prev node
    let prev = this.get(index - 1);
    //node to be removed
    let removed = prev.next;
    //set the next node
    prev.next = removed.next;
    //decrement the length
    this.length --;
    //return the removed node
    return removed;
  }
}

let list = new SinglyLinkedList();

list.unshift(200);
list.unshift(100);
list.push(300);

console.log(list.remove(1))
console.log(list)
