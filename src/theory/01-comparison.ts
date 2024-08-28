import { interval } from "rxjs";

// 1) callback

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("Hello callback hell!");
//     }, 3000);
//   }, 3000);
// }, 3000);

// 2) promise(async/await)

// const promise = new Promise((resolve) => {
//   let counter = 1;
//   setInterval(() => {
//     resolve(counter++);
//   }, 1000);
// });

// promise.then((value) => console.log(value));

// 3) generators

// function* generateSequence() {
//   let counter = 1;
//   while (true) {
//     yield counter++;
//   }
// }

// let generator: Generator = generateSequence();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// 4) rxJs

// const interval$ = interval(1000);

// interval$.subscribe((value) => {
//     console.log(value);
// });
