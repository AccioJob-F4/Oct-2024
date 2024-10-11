// Fetch --> returns a Promise

const url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(url)
//   .then((response) => {
//     console.log("🚀 ~ .then ~ response:", response);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("🚀 ~ .then ~ data:", typeof data);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });

// fetch(url)
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     console.log("🚀 ~ .then ~ data:", typeof data);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });

// fetch(url)
//   .then((response) => {
//     return response.blob();
//   })
//   .then((data) => {
//     console.log("🚀 ~ .then ~ data:", data);
//     console.log("🚀 ~ .then ~ typeof data:", typeof data);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });

// ========================================================================================

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     users.forEach((user, idx) => {
//       console.log("🚀 ~ users.forEach ~ user.name:", user.name);
//     });
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });

// ========================================================================================

// Promise Chaining
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log("🚀 ~ fetch ~ user.name:", user.name);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  })
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log(`Posts by ${posts[0].userId}`);

    posts.forEach((post) => {
      console.log("🚀 ~ posts.forEach ~ post:", post.title);
    });
  })
  .catch((error) => {
    console.log("🚀 ~ .then ~ error:", error);
  });
