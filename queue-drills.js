const Queue = require('./Queue');
const DoublyQueue = require('./DoublyQueue');

// 6. Create a queue using Singly linked list
// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
// Implement a display() function outside of the Queue class that lets you display what's in the queue.
// Remove Spock from the queue and display the resulting queue.

function main() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  console.log('---First in queue---')
  peek(starTrekQ);
  console.log('---Is the queue empty?---')
  isEmpty(starTrekQ);
  console.log('---Display queue---')
  display(starTrekQ);

  // // remove Spock from the queue and display the resulting queue
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  console.log('---After removing Spock---')
  display(starTrekQ);

  return starTrekQ;
}

main();

// lets you take a peek at what the 1st item in the queue is
function peek(queue) {
  if (!queue.first) {
    console.log('Queue is empty!');
    return;
  }
  console.log(queue.first.value);
  return queue.first;
}

// // allows you to check if the queue is empty or not
function isEmpty(queue) {
  if (queue.first) {
    console.log('false');
    return false;
  }
  else {
    console.log('true');
    return true;
  }
}

// lets you display what's in the queue
function display(queue) {
  let currFirst = queue.first;

  while (currFirst !== null) {
    console.log(currFirst.value);
    currFirst = currFirst.next;
  }
}

// 7. Create a queue class using Doubly linked List
  // See DoublyQueue.js

// Use the items listed in #6 and enqueue them to your queue.

function mainDoubly() {
  const starTrekDoublyQ = new DoublyQueue();

  starTrekDoublyQ.enqueue('Kirk');
  starTrekDoublyQ.enqueue('Spock');
  starTrekDoublyQ.enqueue('Uhura');
  starTrekDoublyQ.enqueue('Sulu');
  starTrekDoublyQ.enqueue('Checkov');

  console.log('---First in queue---')
  peek(starTrekDoublyQ);

  return starTrekDoublyQ;
}

mainDoubly();

// Check to see who is first one on the Queue?
  // Kirk


// 8. Queue implementation using a stack
// There are many ways to implement a queue. You have learned using singly linked list, and doubly
// linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other
// data structure. (You are not allowed to use a doubly linked list or array. Use your stack
// implementation with a linked list from above to solve this problem.)

  // See StackQueue.js


// 9. Square dance pairing
// As people come to the dance floor, they should be paired off as quickly as possible: man with woman,
// man with woman, all the way down the line. If several men arrive in a row, they should be paired in the
// order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have
// no women yet, or vice versa), and pair them as appropriate.

// F Jane
// M Frank
// M John
// M Sherlock
// F Madonna
// M David
// M Christopher
// F Beyonce
  // Female dancer is Jane, and the male dancer is Frank
  // Female dancer is Madonna, and the male dancer is John
  // Female dancer is Beyonce, and the male dancer is Sherlock
  // There are 2 male dancers waiting to dance

  // See square-dance-pairing.js


// 10. The Ophidian Bank
// At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of
// the queue, and the teller will serve a customer only if they have all of the appropriate paperwork.
// Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite
// right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.

function addPeople() {
  const people = new Queue();

  people.enqueue('John');
  people.enqueue('David');
  people.enqueue('Jessica');
  people.enqueue('Jane');
  people.enqueue('Mark');

  console.log('---Ophidian Bank---')
  bank(people);

  return people;
}

addPeople();

function bank(q) {
  while (q.first) {
    let random = Math.floor(Math.random() * Math.floor(4));

    if (random === 0) {
        console.log(`Back of the line ${q.first.value}!`);
        q.enqueue(q.dequeue());
    }
    else {
        console.log(`Have a nice day ${q.first.value}!`);
        q.dequeue()
    }
  }
  return;
}

