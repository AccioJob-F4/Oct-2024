// Promise --> Object, placeholders, cleaner, more manageable

// Promise States : Pending, FulFilled (Resolved), Rejected
// Promise Lifecycle :

// const a = 5;

// Create a Promise
// const myPromise = new Promise((resolve, reject) => {
//   if (a % 2 === 0) {
//     resolve("Divyansh this is a Success!");
//   } else {
//     reject("F*** it is a Failure!");
//   }
// });

// const isEven = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number % 2 === 0) {
//         resolve(`${number} is even.`);
//       } else {
//         reject(`${number} is odd`);
//       }
//     }, 1000);
//   });
// };

// // Consuming a Promise (.then(), .catch() and .finally())
// isEven(41)
//   .then((message) => {
//     console.log(`Success: ${message}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   })
//   .finally(() => {
//     console.log(`Operation Completed`);
//   });

// ==============================================================================
// const checkAge = (age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("You are eligible");
//       } else {
//         reject("You are not eligible");
//       }
//     }, 2000);
//   });
// };

// checkAge(20)
//   .then((message) => {
//     console.log("🚀 ~ .then ~ message:", message);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });
