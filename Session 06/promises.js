// Promise --> Object --> Placeholder for a value
/*
--> Pending
--> Fulfilled
--> Rejected
*/

// Creation/Consuming a Promise

// const myPromise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) resolve("Promise resolved");
//   else reject("Promise rejected");
// });

// myPromise
//   .then((message) => {
//     console.log("🚀 ~ .then ~ message:", message);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   })
//   .finally(() => {
//     console.log("🚀 ~ Promise settled");
//   });

// const isEven = (number) => {
//   return new Promise((resolve, reject) => {
//     // throw new Error("Hola");
//     setTimeout(() => {
//       if (number % 2 === 0) {
//         resolve(`${number} is even.`);
//       } else {
//         reject(`${number} is odd.`);
//       }
//     }, 3000);
//   });
// };

// isEven(41)
//   .then((result) => {
//     console.log("🚀 ~ .then ~ result:", result);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });
