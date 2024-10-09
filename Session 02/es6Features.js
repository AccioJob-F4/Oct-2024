// ES6+ FEATURES
// ECMAScript 2015

// ----------------------------------------------------------------------

// let & const

// const a = 6;
// a = 7;

// const b = { h: 1, g: 2 };
// b = { a: 3 };
// b.a = 3;
// console.log("🚀 ~ b:", b);

// const arr = [1, 2, 3];
// arr[1] = 10;
// arr = [1, 10, 3];
// console.log("🚀 ~ arr:", arr);

// if(condition){
//     const a = 18;
// }

// function alpha() {
//     const b = 8;
// }

// ----------------------------------------------------------------------

// Template Literals
// let name = "John";
// const d = 7;
// // Old Way
// console.log("Hello " + name + ", Welcome to the session!");

// // New Way
// console.log(`Hello ${name}, Welcome to the session!`);

// console.log(
//   `Hello ${d % 6 === 0 ? name : "Divyansh"}, Welcome to the session!`
// );

// ----------------------------------------------------------------------

// Arrow Functions
// Old Way
// function add(a, b) {
//   return a + b;
// }

// New Way
// const add = (a, b) => {
//   return a + b;
// };

// add(2, 3);

// ----------------------------------------------------------------------

// Default value to Arrow Function Parameter

// function greet(name = "User") {
//   console.log(`Hello, ${name}`);
// }

// greet("ksdj");

// const greet1 = (name = "User") => {
//   console.log(`Hello, ${name}`);
// };

// greet1("ksdj");

// ----------------------------------------------------------------------
// Classes in Javascript

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }

//   isStudent() {
//     console.log(
//       `${this.age > 24 ? "Yes" : "No"}, I'm ${
//         this.age > 24 ? "a" : "not a"
//       } student.`
//     );
//   }
// }

// const person1 = new Person("Divyansh", 18);
// const person2 = new Person("John", 48);

// person1.introduce();
// person2.introduce();

// person1.isStudent();
// person2.isStudent();

// ----------------------------------------------------------------------
// Static Methods
// class MathOperations {
//   constructor(val1, val2) {
//     this.val1 = val1;
//     this.val2 = val2;
//   }

//   static add(a, b) {
//     return a + b;
//   }

//   substract(a, b) {
//     return a - b;
//   }
// }

// console.log(new MathOperations(5, 6).substract(1, 2));
// console.log(MathOperations.add(1, 2));
// console.log(MathOperations.substract(1, 2));

// ----------------------------------------------------------------------
// Create a Vehicle class that has properties like model, year and mileage.
// Add methods to calculate the age of the car and to update mileage

// class Vehicle {
//   constructor(model, year, mileage) {
//     this.model = model;
//     this.year = year;
//     this.mileage = mileage;
//   }

//   calculateAge(currentYear) {
//     return currentYear - this.year;
//   }

//   updateMileage(newMileage) {
//     this.mileage = newMileage;
//   }
// }

// const myScooty = new Vehicle("Activa 6G DLX Pro", 2023, "60kmpl");
// const hness = new Vehicle("Honda Hness CB350", 2022, "42kmpl");
// const bmw = new Vehicle("BMW GSA 1300", 2024, "21kmpl");

// console.log(myScooty.calculateAge(2024));
// console.log(hness.calculateAge(2024));
// console.log(bmw.calculateAge(2024));

// console.log(hness.updateMileage("38kmpl"));
// console.log(hness.mileage);

// ----------------------------------------------------------------------
// Inheritance in Javascript

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }

//   isStudent() {
//     console.log(
//       `${this.age > 24 ? "Yes" : "No"}, I'm ${
//         this.age > 24 ? "a" : "not a"
//       } student.`
//     );
//   }
// }

// class Student extends Person {
//   constructor(name, age, course) {
//     super(name, age);

//     this.course = course;
//   }

//   //   introduce() {
//   //     console.log(
//   //       `Hi, I'm ${this.name} and I'm ${this.age} years old and I study ${this.course}`
//   //     );
//   //   }
// }

// const student1 = new Student("Bob", 21, "CSE");
// student1.introduce();

// ----------------------------------------------------------------------
// NPM --> Node Package Manager

function isPallindrome() {}

// ----------------------------------------------------------------------
