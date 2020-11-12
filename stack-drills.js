const Stack = require('./Stack');
const Queue = require('./Queue');

// 1. Create a stack class
// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

function main() {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log('---First in queue---')
  peek(starTrek);
  console.log('---Is the queue empty?---')
  isEmpty(starTrek);
  console.log('---Display queue---')
  display(starTrek);

  // Remove McCoy from your stack and display the stack
  starTrek.pop();
  starTrek.pop();
  console.log('---After removing McCoy----')
  display(starTrek);

  return starTrek;
}

main();

// 2. Useful methods for a stack
// Using the Stack class above, implement the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?
// Remove McCoy from your stack and display the stack

// allows you to look at the top of the stack without removing it
function peek(stack) {
  if (!stack.top) {
    console.log('Stack is empty!');
    return;
  }
  console.log(stack.top.data);
  return stack.top;
}

// allows you to check if the stack is empty or not
function isEmpty(stack) {
  if (stack.top) {
    console.log('false');
    return false;
  }
  else {
    console.log('true');
    return true;
  }
}

// to display the stack
function display(stack) {
  let currTop = stack.top;

  while (currTop !== null) {
    console.log(currTop.data);
    currTop = currTop.next;
  }
}

// What is the 1st item in your stack?
// Kirk (first in - bottom of stack)


// 3. Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward.
// For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you
// take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome.
// We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not.
// Use the following template as a starting point.

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let newStack = new Stack();
  let reverseStack = '';

  for(let i = 0; i < s.length; i++){
    newStack.push(s[i]);
  }
  let currNode = newStack.top;
  while (currNode !== null) {
    reverseStack = reverseStack + currNode.data;
    currNode = currNode.next;
  }
  console.log(reverseStack);

  if(reverseStack === s){
    return true;
  }
  return false;
}

// True, true, true, false
console.log('---Palindrome---')
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


// 4. Matching parentheses in an expression
// A stack can be used to ensure that an arithmetic expression has balanced parentheses.
// Write a function that takes an arithmetic expression as an argument and returns true or false
// based on matching parenthesis. As a bonus provide a meaningful error message to the user as to
// what's missing. For example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ).
// Finding a close parenthesis without an open parenthesis is an error (report the location of the
// close); reaching the end of the string while still "holding" an open parenthesis is also an error
// (report the location of the open).

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}.
// These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating
// that you were expecting a ] but found a ). If this is starting to look and sound very familiar,
// congratulations - you're beginning to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes,
// brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding
// close quote.

function matchParentheses(expression) {
  const expressionStack = new Stack();
  for (let i = 0; i < expression.length; i++) {
      expressionStack.push(expression[i])
  }

  let openCount = 0
  let closedCount = 0
  let currNode = expressionStack.top
  while (currNode !== null) {
      if (currNode.data === '(') {
          openCount = openCount + 1
      }
      else if (currNode.data === ')') {
          closedCount = closedCount + 1
      }
      currNode = currNode.next
  }

  if (openCount > closedCount) {
      return `Missing ')'`;
  }

  if (openCount < closedCount) {
      return `Missing '('`;
  }

  if (openCount === closedCount) {
      return `Correct number of '(' and ')'`;
  }
}

console.log('---Matching Parentheses---')
console.log(matchParentheses('(2+5)'));
console.log(matchParentheses('(2+5'));
console.log(matchParentheses('2+5)'));


// 5. Sort stack
// Write a program to sort a stack such that the smallest items are on the top (in ascending order).
// You can use an additional stack, but you may not use any other data structure (such as an array,
// or linked list).

console.log('---Start Sort---')

function testSort() {
  const numbers = new Stack();
  numbers.push(3);
  numbers.push(2);
  numbers.push(5);
  numbers.push(7);
  numbers.push(1);

  // const sortedNumbers = sortStack(numbers);
  console.log("---Unsorted Numbers---")
  display(numbers);

  console.log("---Sorted Numbers---")
  const sortedStack = sortStack(numbers);
  display(sortedStack);

  return numbers;

}

testSort();


function sortStack(stack) {
  if(!stack.top.next) return stack;
  let sortStack = new Stack()
  while(stack.top) {
    let temp = stack.pop()
    while(sortStack.top && sortStack.top.data > temp) {
      stack.push(sortStack.pop())
    }
    sortStack.push(temp)
  }

  return sortStack;
}
