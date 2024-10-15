// getData((data) => {
//   processData(data, (processedData) => {
//     saveData(processedData, (result) => {
//       console.log("🚀 ~ saveData ~ result:", result);
//     });
//   });
// });

// function getData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 1000);
//   });
// }

// getData()
//   .then((data) => {
//     console.log("🚀 ~ getData ~ data:", data);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ getData ~ error:", error);
//   });
