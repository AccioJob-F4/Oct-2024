/* Promise.race --> takes an array of promises as input and returns a new Promise

    This new Promise resolves or rejects as soon as one of the Input Promise in the array resolves or rejects

*/

const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
);

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
);

const fetchComment = fetch(
  "https://jsonplaceholder.typicode.com/comments/1"
).then((res) => res.json());

Promise.race([fetchPost, fetchUser, fetchComment])
  .then((value) => {
    console.log("🚀 ~ .then ~ value:", value);
  })
  .catch((error) => {
    console.log("🚀 ~ error:", error);
  });
