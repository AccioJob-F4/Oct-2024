const arr = [1, true, "Divyansh Singh", 4, true, "dgsiauc"];

const obj = {
  firstName: "Divyansh",
  lastName: "Singh",
  age: 25,
};

const [a, b, c, ...rest] = arr;
console.log("🚀 ~ rest:", rest);

const { age, firstName } = obj;
console.log("🚀 ~ firstName, age:", firstName, age);

// const fn1 = () => {
//     arr[2] --> 3 times
//     c --> 3 times
// };

// const fn2 = () => {
//     obj.firstName --> 5 times
//     firstName --> 5 times
// };

// const fn3 = () => {
//     arr[1] --> 5 times
//     obj.lastName --> 6 times
// };
