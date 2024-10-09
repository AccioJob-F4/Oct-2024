// // Functions declarations
// function myFunction() {
//   // logic
// }

// // Functions Expressions
// const myFunction = function () {
//   // logic
// };

// // Arrow Functions
// const myFunction = () => {
//   // logic
// };

// ES6

// Scope (Global Scope, Function Scope, Block Scope)

// const a = 10;

// const add = () => {
//   const b = 6;

//   if (b % 2 == 0) {
//     const c = 20;
//     console.log("🚀 ~ add ~ c:", c);
//   }
//   console.log("🚀 ~ add ~ c:", c);
//   console.log(a + b);
// };
// // console.log("🚀 ~ add ~ b:", b);

// add();

// Control Structures (Conditionals, Loops)
// Conditionals (if, else if, ternary, switch)
// Loops (for, while, do ... while, map, forEach, filter)

// Objects and Arrays
// const arr = [1, true, "djhgdf", {}, []];
// push, pop, shift, unshift, map, filter, reduce  etc etc

// const divyansh = {
//   looks: "handsome",
//   rich: "no",
// };

// console.log("🚀 ~ divyansh.looks:", divyansh.looks); // DOT Notation

// console.log(`🚀 ~ divyansh["looks"]:`, divyansh["looks"]); // Bracket Notation

// Closures & Hoisting

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log("🚀 ~ inner ~ count:", count);
//   };
// }

// const alpha = outer();

// // const alpha = function inner() {
// //   count++;
// //   console.log("🚀 ~ inner ~ count:", count);
// // };

// alpha();

// function outer1() {
//   let count = 0;

//   return count;
// }

// const countVar = outer1();
// var a;
// console.log(a);

// a = 10;

// const add = (a, b) => {
//   return a + b;
// };

// console.log("🚀 ~ add(2, 3):", add(2, 3));

// const name = "Divyansh Singh";

// console.log("Hello World, my name is " + name);
// console.log(`Hello World my name is ${name}`);

// const arr = [1, 2, 3, 4, 5];
// const [a, b, c, d, e, f] = arr;
// // console.log("🚀 ~ a, b:", a, b, c, d, e, f);

// let alpha;
// let beeta = null;
// console.log("🚀 ~ beeta:", beeta);
// console.log("🚀 ~ alpha:", alpha);

// const divyansh = {
//   looks: "handsome",
//   rich: "no",
//   age: 25,
//   address: {
//     houseNo: 53,
//     roadName: "3rd cross road",
//     block: "Jakasandra Block",
//     line2: "Koramangala, bangalore",
//     pin: 560034,
//   },
// };

// const { looks } = divyansh;
// console.log("🚀 ~ looks:", looks);
