/* Promise.all --> takes an array of promises as input and returns a new Promise

    This new promise is resolved when all the input promises are resolved
    This new promise is rejected when any of the input promises reject

*/

const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
); // 2

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
); // 3

const fetchComment = fetch(
  "https://jsonplaceholder.typicode.com/comments/1"
).then((res) => res.json()); // 4

Promise.all([fetchPost, fetchUser, fetchComment])
  .then(([post, user, comment]) => {
    console.log("🚀 ~ .then ~ comment:", comment);
    console.log("🚀 ~ .then ~ user:", user);
    console.log("🚀 ~ .then ~ post:", post);
  })
  .catch((error) => {
    console.log("🚀 ~ error:", error);
  });
