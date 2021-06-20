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
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length ++;
    return this;
  }
  //returns the tail that got removed
  pop() {
    //if there are no nodes, return undefined
    if(!this.head) return undefined;
    //Loop through the list until you reach the tail
    let current = this.head;
    let newTail = current;
    while(current.next) {
      //new tail lags behind the current by 1 node
      newTail = current;
      current = current.next;
    }
    //Set the next property of the 2nd to last node to be null
    this.tail = newTail;
    //Set the tail to be the 2nd to last node
    this.tail.next = null;
    //Decrement the length by 1
    this.length --;
    //if the list is now empty, then set the head and tail to be null;
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }
    //Return the value of the node removed
    return current;
  }
}

let list = new SinglyLinkedList();

list.push('Hello');
list.push('my list');
list.push('!')

list.pop();
list.pop();
list.pop();
console.log(list)