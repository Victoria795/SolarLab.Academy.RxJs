import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  interval,
  map,
  Observable,
  Subscriber,
  switchMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

//cold

// const coldObservable$ = new Observable((subscriber: Subscriber<any>) => {
//   const value = new Date();
//   subscriber.next(value);
// });

// const s1 = coldObservable$.subscribe(console.log);

// setTimeout(() => {
//   const s2 = coldObservable$.subscribe(console.log);
// }, 2000);

// setTimeout(() => {
//   const s3 = coldObservable$.subscribe(console.log);
// }, 5000);

//hot

// const value = new Date();
// const hotObservable$ = new Observable((subscriber: Subscriber<any>) => {
//   subscriber.next(value);
// });

// const s1 = hotObservable$.subscribe(console.log);

// setTimeout(() => {
//   const s2 = hotObservable$.subscribe(console.log);
// }, 2000);

// setTimeout(() => {
//   const s3 = hotObservable$.subscribe(console.log);
// }, 5000);

// const hotObservable$ = fromEvent<InputEvent>(document, "input").pipe(
//   map(({ data }) => data)
// );

// const s1 = hotObservable$.subscribe(console.log);

// setTimeout(() => {
//   const s2 = hotObservable$.subscribe(console.log);
// }, 5000);
