// Call Stack --> Simple Data Structure --> keeps track of function execution

// Microtasks v/s Macrotasks

// Macrotasks (Tasks) --> tasks that are scheduled to execute at a later time
/* 
--> setTimeout
--> setInterval
--> I/O operations
--> UI rendering events
*/

// MicroTasks --> high priority tasks that are executed before the rendering phase
/*
--> Promise (.then, .catch. finally)
--> MutationObserver
--> queueMicrotask
*/

// How promises are scheduled

// const observer = new MutationObserver(() => {
//   console.log("MutationObserver callback");
// });

// observer.observe(document.body, { attributes: true });

// document.body.setAttribute("data-test", "123");

// console.log("DOM mutation scheduled");

// setTimeout(() => {
//   console.log("1");

//   Promise.resolve().then(() => {
//     console.log("2");
//   });

//   console.log("3");
// }, 0);

// console.log("4");
// let count = 0;

// function schedule() {
//   Promise.resolve().then(() => {
//     count++;
//     console.log("Microtask : ", count);

//     if (count > -1) {
//       schedule();
//     }
//   });
// }

// schedule();

// setTimeout(() => {
//   console.log("Macrotask");
// }, 0);
