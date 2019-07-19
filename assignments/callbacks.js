// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'dog', 'yo-yo', 'Notebook', 'cat'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
    return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

getLength(items, function(item){
  console.log(item);
})

//Arrow Function Version
getLength(items, item=>console.log(item));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
}
last(items, function(item){
  console.log(item);
})

//Arrow Function Version
last(items, item=>console.log(item));



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}
sumNums(1,2,function(sum){
  console.log(sum);
});

//arrow function version
sumNums(1,2, sum=>console.log(sum));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}

multiplyNums(4,5,function(product){
  console.log(product);
});

//arrow function version
multiplyNums(4,5, product=>console.log(product));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));

}

contains("Gum", items, function(booleanResult){
  console.log(booleanResult);
});

contains("Pencil", items, b=>console.log(b));



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(new Set(array));

}

removeDuplicates(items, function(uniqueArray){
  console.log(uniqueArray);
});

removeDuplicates(items, uniqueArray=>console.log(uniqueArray));
