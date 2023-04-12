"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Array - dizilerle çalışmak
// Array oluşturmak
var domain = "kodluyoruz";
isActive = false;
var items = [15, 25, 35, isActive, domain];
console.log(items);
var emptyArray = []; // Bos liste olusturmak
// array içerisindeki eleman-oge sayisini öğrenmek

console.log(items.length); // array içindeki oge sayisini verir
// array içindeki ilk elemanin cagirilmasi 

console.log("İlk Eleman :", items[0]); // 15
// Array içindeki son elemanin cagirilmasi

console.log("Son Eleman :", items[items.length - 1]); // kodluyoruz
// Array içindeki ortadaki elemanin cagirilmasi

console.log("Ortadaki Eleman :", items[Math.floor(items.length / 2)]); // 25
// degisken içindeki bilginin array olup olmadığının kontrol edilmesi

console.log(_typeof(items) //object olarak çıktı verir
);
console.log(Array.isArray(items) // true
); // Hangileri isArray bilgisidir

console.log("[] :", Array.isArray([]));
console.log("1 :", Array.isArray(1));
console.log("true :", Array.isArray(true));