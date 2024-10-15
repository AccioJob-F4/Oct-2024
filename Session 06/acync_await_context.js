/* 
Async/Await --> It's built on top of promises, is just a syntactical sugar, 
it allows async code to look and behave like sync code making it more readable and maintainable

    async: used to declare an async function
    await: pauses the execution of the function until a promise is rejected or resolved
*/

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("This is resolved");
//     }, 1000);
//   });
// }

// // Using Promises
// // function fetchData() {
// //   getData()
// //     .then((data) => {
// //       console.log("🚀 ~ getData ~ data:", data);
// //     })
// //     .catch((error) => {
// //       console.log("🚀 ~ .then ~ error:", error);
// //     });
// // }

// // Using Async/Await
// async function fetchData() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.log("🚀 ~ fetchData ~ error:", error);
//   }
// }

// // function fetchData() {
// //   try {
// //     const data = getData();
// //     console.log(data);
// //   } catch (error) {
// //     console.log("🚀 ~ fetchData ~ error:", error);
// //   }
// // }

// fetchData();

const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
);

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
);

async function fetchParallel() {
  try {
    const [post, user] = await Promise.all([fetchPost, fetchUser]);
    console.log("🚀 ~ fetchParallel ~ user:", user);
    console.log("🚀 ~ fetchParallel ~ post:", post);
  } catch (error) {
    console.log("🚀 ~ fetchParallel ~ error:", error);
  }
}

// function fetchParallel() {
//   try {
//     const value = Promise.all([fetchPost, fetchUser]);
//     console.log("🚀 ~ fetchParallel ~ value:", value);
//   } catch (error) {
//     console.log("🚀 ~ fetchParallel ~ error:", error);
//   }
// }

fetchParallel();
