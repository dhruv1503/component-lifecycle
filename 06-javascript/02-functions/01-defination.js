// console.log("Functions ready");
// console.log(square(4));

// What are functions

// FUNCTION DECLARATION
// Function declaration refers to defining a function
// function square(num) {
//   return num * num;
// }
// This is also called as function statement or function defination

// Function expression
// When we store a function inside of a variable it is termed as function expression

// var squareCall = function (num) {
//   return num * num;
// };

// Anonymous Functions
//  Functions that have no name like in above example, there variable has a name but the function is anonymous. These functions can be assigned to a variable or called as a callback function

// First class citizens
// In a language where functions can be declared as variables are called as first class functions.
// example
// function display(fn) {
//   console.log(`Displayed value is ${fn(19)}`);
// }

// display(square);

// IIFE Imidiately invoked function expressions

// (function () {
//   let a = 100;
//   square(a);
// })()
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(1);
// })(2);


// HOISTING

// var a = 20;

// function abc (){
//   console.log(a)
//   var a = 10;
// }
// abc()

// var a = 20;
// function abc (){
//   console.log(a)
//   a = 10;
// }
// abc()

// var a = 20;
// function abc (){
//   console.log(a);
//   a = 10;
//   return a
// }
// a = abc()
// console.log(a)

// var a = 20;
// function abc(){
//   console.log(a)
//   if(a){
//     return 10
//   }
//   var a = 25;
//   return a
// }

// a = abc();
// console.log(a);


// PARAMS AND ARGUMENTS
// PARAMS  While defining the function, when a function accepts some inputs for processing some logic, these inputs are termed as parameters

// ARGUMENTS Whime invoking a function, we need function to run logic on certain inputs, at this time these inputs are termed as aguments


//  ARGS

// var arr = [1, 2, 3];

// function abc(...args){ // REST OPERATORS
//   console.log(args); // it returns array inside an array
//   console.log(...args); // it returns the array input
//   const result = args.map((element) => (console.log(element)))
// }
// abc(arr)

// SPREAD OPERATORS 

// function abc(a, b, ...params){
//   console.log(a, b, params)
// }

// abc(arr); // SPREAD OPERATORS


// function greet(){
//   var a = "Dhruv";
//   function displayName(salutation){
//     console.log(`${salutation} ${a}`)
//   }
//  return displayName;
// }
// // greet() // calls function greet() normally
// greet()("Hello") // greet() returns function displayName and then, inorder to invoke displayName function we write ()()

// CLOSURE SCOPE
// 1. Local Scope 
// 2. Outer function Scope
// 3. Global Scope 

// function counter(){
//   var _counter = 0;
//   function add(incrementValue){
//     _counter += incrementValue;
//   }
//   function retrieve(){
//     return `Counter = ${_counter}`
//   }
//   return {
//     _counter,
//     add,
//     retrieve
//   }
// }

// const a = counter()
// console.log(a)

// a.add(5);
// console.log(a._counter)
// a.add(15);
// console.log(a._counter)
// console.log(a.retrieve())
// WHY??

// Types of Functions in JS
// Closures
// Functional Scope
// SPREAD AND REST OPERATORS
// Lexical Scope
// module pattern

// MAP, FILTER AND REDUCE

// MAP
// const multiplier = (num, factor) => (num * factor);

// const multiplyArr = ((arr, factor) => (arr.map((element) => (multiplier(element, factor)))));

// console.log(multiplyArr([1,2,3,4], 2))
