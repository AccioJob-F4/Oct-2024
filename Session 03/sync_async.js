// console.log("First");
// console.log("Second");
// console.log("Third");

// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 1000);
// console.log("Third");

// ========================================================================

// Event Loop
// function first(){
//     second();
// }

// function second(){
//     third();
// }

// function third(){
//     console.log("Third Fuction");
// }

// first();

// ---------------

// console.log('Start');

// setTimeout(() => {
//     console.log('Timeout Callback');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise Callback');
// });

// console.log('End');

// ========================================================================

// doSomething(function (result) {
//   doSomethingElse(result, function (newResult) {
//     doAnotherThing(newResult, function (finalResult) {
//       console.log(finalResult);
//     });
//   });
// });

// ========================================================================
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

setTimeout(() => {
  console.log("Timeout 2");
}, 1000);

// console.log("End");

// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
// ========================================================================
