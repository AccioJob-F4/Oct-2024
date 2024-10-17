/*
APIs --> 
    GET (retrieves the data from the server), 
    POST (Send some data to server to create a resource), 
    PUT (Update an existing resource completely), 
    PATCH (Updates a part of an existing resource), 
    DELETE (Removes a resource from the server)
*/

// GET Method
// https://api.agify.io/?name=divyansh
// fetch("https://api.agify.io/?name=divyansh")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log("🚀 ~ .then ~ data:", data);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });

// POST Method
// https://jsonplaceholder.typicode.com/posts
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "foo",
//     data: "bar",
//     userId: 1,
//   }),
// })
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log("🚀 ~ data:", data);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//     return {};
//   });

// PUT Method
// https://jsonplaceholder.typicode.com/posts/1
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body content",
    userId: 1,
  }),
})
  .then((resp) => resp.json())
  .then((data) => {
    console.log("🚀 ~ data:", data);
  })
  .catch((error) => {
    console.log("🚀 ~ .then ~ error:", error);
  });
