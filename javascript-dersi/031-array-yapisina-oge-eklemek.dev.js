"use strict";

// Array yapısına oge eklemek ve Array içerisinden istenilen ogenin ççıkartılması
var items = [10, 20, 30, 40];
console.log("items - ilk hali : ", items); // Array sona oge/eleman eklemek -> push

items.push(50);
console.log("50 : ", items); // Array: basa oge eleman eklemek -> unshift

items.unshift(5);
console.log("5 : ", items); // Array: sondaki ogeyi cikarmak -> pop

var lastItem = items.pop(); // son elemanı lastItem içerisine ekledik

console.log(lastItem, items); // Array: bastaki ogeyi cikartmak -> shift 

firstItem = items.shift(); // ilk elemanı firstItem içerisine ekledik

console.log(firstItem, items); // Array içerisindeki bir ogenin bilgisinin değiştirilmesi
// ilk eleman

items[0] = 5;
console.log(items); // son eleman 

items[items.length - 1] = 100;
console.log(items);