// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myNameFunction(firstName) {
  function insideNameFunction(lastName) {
    console.log(firstName + " " + lastName);
  }
  return insideNameFunction;
}

const myName = myNameFunction("Krishan");
myName("Nattar");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  count = 0;
  function innerCounter() {
    count++;
    return count;
  }
  return innerCounter;
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const anotherCounter = counterFactory();

console.log(anotherCounter.increment());
console.log(anotherCounter.increment());
console.log(anotherCounter.increment());
console.log(anotherCounter.increment());
console.log(anotherCounter.decrement());
console.log(anotherCounter.decrement());
console.log(anotherCounter.decrement());
console.log(anotherCounter.decrement());
