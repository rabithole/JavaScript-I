// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => console.log("Function was invoked!");
// myFunction();


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = (param) => param;
// console.log(anotherFunction("Example"));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// console.log(subtract(1,2));

const subtract = (param1, param2) => param1 - param2;
// console.log(subtract(5,2));


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = exampleArray.map(function (num) => num * 3;
console.log(triple(3));