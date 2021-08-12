//Queues - FIFO. => line at a cashier.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    let current = this.first;
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length ++;
    return this.length;
  }

  dequeue() {
    let removedNode = this.first;
    if(!this.first) return undefined;
    this.first = removedNode.next;
    this.length --;
    if(!this.length) {
      this.first = null;
      this.last = null;
    }

    return removedNode.val;
  }
}

let queues = new Queue();

queues.enqueue(12);
queues.enqueue(22);
console.log('de-queued',queues.dequeue());
console.log('de-queued',queues.dequeue());
console.log(queues);
