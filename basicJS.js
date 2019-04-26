// .push() push in of to last arr
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3])
console.log(myArray); //Return  [["John", 23], ["cat", 2], ["dog", 3]].


// .pop() removes the last element from an array and returns that element. 
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
