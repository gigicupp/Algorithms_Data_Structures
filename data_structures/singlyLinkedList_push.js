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
      this.tail = node;
    }
    //otherwise set the next prop on the tail to be the new node
    this.tail.next = node;
    this.length += 1;
  }
}
