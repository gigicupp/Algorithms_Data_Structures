//Stacks are LIFO => think of a pile of dishes.
//we want the add and remove to be a constant time!!!

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let oldNode = this.first;
      this.first = newNode;
      this.first.next = oldNode;
    }
    this.length ++;
    return this.length;
  }

  pop() {
    if(!this.first) return undefined;
    let poppedNode = this.first;
    if(this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
    }
    this.length --;
    return poppedNode.val;
  }
}

let stacks = new Stack();
stacks.push(1);
stacks.push(2);
console.log(stacks.pop())
console.log(stacks.pop())
console.log(stacks)
