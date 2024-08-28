import { from, fromEvent, Observable, Subscriber, tap, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";

// RxJS (Reactive Extensions for JavaScript)
// — это библиотека для реактивного программирования с использованием наблюдаемых значений.

// const observable$ = new Observable((subscriber: Subscriber<unknown>) => {
//   subscriber.next();
//   subscriber.error();
//   subscriber.complete();
// });

// const observable$ = new Observable((subscriber: Subscriber<unknown>) => {
//   let counter = 1;
//   const interval = setInterval(() => {
//     if (counter === 4) {
//       clearInterval(interval);
//       subscriber.complete();
//       return;
//     }
//     subscriber.next(counter++);
//   }, 1000);
// });

// observable$.subscribe({
//   next: (counter) => console.log(counter),
//   error: (error) => console.log(error),
//   complete: () => console.log("observable complete"),
// });
