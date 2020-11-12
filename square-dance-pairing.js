const Queue = require('./queue');

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


function main() {
  const queue = new Queue();

  queue.enqueue('F Jane');
  queue.enqueue('M Frank');
  queue.enqueue('M John');
  queue.enqueue('M Sherlock');
  queue.enqueue('F Madonna');
  queue.enqueue('M David');
  queue.enqueue('M Christopher');
  queue.enqueue('F Beyonce');

  dancePairing(queue);

  return queue;
}

main();

function dancePairing(queue) {
  let femaleQueue = new Queue();
  let maleQueue = new Queue();
  let counter = 0;
  while(queue.first !== null) {
    if(queue.first.value[0] === 'F') {
      femaleQueue.enqueue(queue.first.value);
      queue.dequeue();
    } else {
      maleQueue.enqueue(queue.first.value);
      queue.dequeue();
    }
  }
  while(maleQueue.first !== null && femaleQueue.first !== null) {
    console.log(`${maleQueue.first.value} is paired with ${femaleQueue.first.value}`);
    maleQueue.dequeue();
    femaleQueue.dequeue();
  }
  if (maleQueue.first !== null) {
    while(maleQueue.first !== null) {
      counter++;
      maleQueue.dequeue();
    }
    console.log(`There are ${counter} male dancers waiting`);
  }

  if (femaleQueue.first !== null) {
    while(femaleQueue.first !== null) {
      counter++;
      femaleQueue.dequeue();
    }
    console.log(`There are ${counter} male dancers waiting`);
  }
}

