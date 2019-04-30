//              \'	single quote
//              \"	double quote
//              \\	backslash
//              \n	newline
//              \r	carriage return
//              \t	tab
//              \b	backspace
//              \f	form feed


// .push() push in of to last arr
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3])
console.log(myArray); //Return  [["John", 23], ["cat", 2], ["dog", 3]].


// unshift() adds the element at the beginning of the array.
var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy"); 
console.log(ourArray) // Return ["Happy", "Stimpson", "J", "cat"]


// .pop() removes the last element from an array and returns that element. 
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]


// .shift()removes the first element
var myArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = myArray.shift();
// removedFromOurArray = "Stimpson" and myArray = ["J", ["cat"]].


//Understanding Undefined Value returned from a Function
var sum = 0;
function addThree() {
  return sum = sum + 3;   // defined cause Return
}
function addFive(){
  sum += 5       // undefined cause not return
}
var unDefined = addFive();
var defined = addThree(); // if not callback this console will be  5
console.log(defined,unDefined,sum) 


//Stand in Line
function nextInLine(arr, item) {
  arr.push(item)
  var remove = arr.shift()
  return remove;  
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));


//Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b 
  }
  isLess(10, 15);// true