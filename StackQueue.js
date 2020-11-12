const Stack = require('./stack');

// 8. Queue implementation using a stack
// There are many ways to implement a queue. You have learned using singly linked list, and doubly
// linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other
// data structure. (You are not allowed to use a doubly linked list or array. Use your stack
// implementation with a linked list from above to solve this problem.)

class queueStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    if (!this.stack2.top) {
      if (!this.stack1.top) {
        console.log('Nothing to dequeue.')
        return;
      }
      while (this.stack1.top) {
        let item = this.stack1.pop();
        this.stack2.push(item);
      }
    }
    return this.stack2.pop();
  }
}

function teststackQueue() {
  const queue = new queueStack();

  queue.enqueue('Kirk');
  queue.enqueue('Spock');
  queue.enqueue('Uhura');
  queue.enqueue('Sulu');
  queue.enqueue('Checkov');

  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
};

teststackQueue();