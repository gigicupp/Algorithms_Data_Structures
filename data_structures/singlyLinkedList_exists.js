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
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let after = prev.next;
    prev.next = newNode;
    newNode.next = after;
    this.length ++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length --;
    return removed;
  }

  exists(val) {
    let current = this.head;
    let found = false;
    while(!found && current.next) {
        if(current.val === val) {
            found = true;
        } else {
            current = current.next;
        }
    }
    return found;
}
}

let list = new SinglyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.shift();

console.log(list.exists(200))