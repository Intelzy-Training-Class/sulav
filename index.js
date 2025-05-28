// // Age checker
// let age = prompt("Enter your age");
// if (age <= 18) {
//   alert("You are a child");
// } else if (age <= 50) {
//   alert("You are an adult");
// } else {
//   alert("You are an old man");
// }

// // Even or odd
// let num = prompt("Enter a number");
// if (num % 2 === 0) {
//   console.log("Even number");
// } else {
//   alert("odd number");
// }

// // grading system
// let score = prompt("Enter your score");
// if (score >= 90) {
//   console.log("A grade");
// } else if (score >= 80) {
//   console.log("B grade");
// } else if (score >= 70) {
//   console.log("C grade");
// } else if (score >= 60) {
//   console.log("D grade");
// } else {
//   console.log("F");
// }

// //login systemn
// let username = prompt("Enter your username");
// let password = prompt("Enter your password");
// if (username === "admin" && password === "1234") {
//   alert("Login successfull");
// } else {
//   alert("Login failed");
// }

// print number
// let num = prompt("Enter any number");
// for (i = 1; i <= 10; i++) {
//   console.log(num * i);
// }

// let data = ["Sulav", "Subedi", 22];
// console.log(data);

// data.push("Kathmandu");
// console.log(data);

// data.unshift("chitwan");
// console.log(data);

// let dummyData = new Array("D1", "D2");
// console.log(dummyData);

// console.log(data.slice(0, 3));

// data.pop();
// console.log(data);

// data.shift();
// console.log(data);

// console.log(data.includes("Sulav"));

// console.log(data.indexOf(22));

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = a.map((i) => {
//   return i + 2;
// });
// console.log(b);

// let person = {
//   name: "Sulav",
//   age: 22,
//   isStudent: true,
// };

// console.log(person.name);
// console.log(person.age);

// //to add  or update the properties
// person.age = 26;
// person.city = "New work";
// console.log(person);

// for (let key in person) {
//   console.log(`${key}:${person[key]}`);
// }

// let student = {
//   grade: "A",
//   subjects: ["Math", "Science", "English"],
// };
// console.log(student.subjects[1]);

// //Array
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);
// fruits.push("Mango"); //Add to end
// console.log(fruits);
// fruits.shift(); //remove first element
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let books = [
//   { title: "1984", author: "Shree krishna" },
//   { title: "To kill a mockingbird", author: "V-ten" },
//   { title: "Champion", author: "Steph curry" },
// ];

// for (let book of books) {
//   console.log(book.title);
// }

// let numbers = [1, 2, 3, 4, 5];
// let b = numbers.map((i) => i * 2);
// console.log(b);
// let c = numbers.filter((i) => i > 2);
// console.log(c);

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// greet("Sulav");

// function sayHello() {
//   console.log("HEllo world");
// }
// sayHello();

// function multiply(a, b) {
//   return a * b;
// }
// console.log(`The multiplication is ${multiply(3, 10)}`);

const add = (a, b) => a + b;
console.log(add(3, 4));
