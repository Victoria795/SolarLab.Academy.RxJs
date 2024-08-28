// creational

import { from, fromEvent, map, of, switchMap, zip } from "rxjs";
import { ajax } from "rxjs/ajax";

// of(1, 5, 10, 20).subscribe((value: number) => console.log(value));

// const array = [5, 10, 15, 20, 25, 30];

// from(array).subscribe((value: number) => console.log(value));

// fromEvent<MouseEvent>(document, "click").subscribe((value: MouseEvent) =>
//   console.log(value)
// );

// switchMap

// const ids$ = from([1, 2, 3]);
// const getAccount$ = names$.pipe(
//   switchMap((name) => ajax('someApi'))
// );

// getAccount$.subscribe((v) => console.log(v));

// zip;

// const products$ = from(["Молоко", "Помидоры", "Картошка"]);
// const prices$ = from([10, 20, 30]);

// const productWithPrice$ = zip(products$, prices$).pipe(
//   map(([product, price]) => `${product}: ${price}`)
// );

// productWithPrice$.subscribe((value) => console.log(value));
