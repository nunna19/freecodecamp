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



  // Counting Cards
  var count = 0;
  function cc(card) {
  // //   // Only change code below this line
  var regex = /[JQKA]/
   if (card > 1 && card < 7 ){count++;}
   else if(card === 10 || String(card).match(regex)){count--;}
   if (count > 0 )return count + " Bet";
     return count + " Hold"
   
    // Only change code above this line
  }
  















  var niko ={
    name:"niko"
  }
  niko.cute = true
  console.log(niko)
  
  
  class Person{
    constructor(name){
     
      this.name = name  ///  "encapusalation"
    }
   goSleep(){
     console.log("Zzz")
   }
  
   funnyLaugh () {
     console.log( this.name + " say 5555+ ")
   }
  
  }
  let me = new Person ("nunna")
  console.log(me)
  me.funnyLaugh() /// "abstraction"
  let anotherPerson = new Person ("niko")
  console.log(anotherPerson)
  anotherPerson.funnyLaugh()
  
  
  class Teacher extends Person {
    constructor(name, skill){
      super(name)
      // this.sayName = this.sayName.bind(this)
      this.skill = skill
    }
    sayName () {
      console.log(this)
    }
    funnyLaugh(){ /// polymorphisism
      console.log(this.name + " hahaha when his finish " + this.skill)
    }
  }
  let nicolas = new Teacher ("nikooo", "helping me") 
  nicolas.sayName() 
  nicolas.funnyLaugh() /// "inheritance" got from parent
  nicolas.goSleep()
  
  let nunna = new Teacher ("buay", "cute")
  console.log(nunna)
  nunna.funnyLaugh()/// "abstraction"
  // what does abstraction mean?
  // its like when you drive a car and you don't know how the engine works but it does work

  // what does encapsulation mean?
  // this is when something is inside of something else like scope or local variable

  // what does inheritance mean?
  // Using extends you are able to use a parent's stuff
  // get qualities from parent

  // What is polymorphisism? (edited) 
  // When you are able to change the names and functionality of children


  


  