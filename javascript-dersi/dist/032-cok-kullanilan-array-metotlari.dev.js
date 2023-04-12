"use strict";

// Çok kullanılan Array(Dizi) Metotları ve Array içinde Array kullanımı
var items = [1, 2, 3, 4, 5]; // Array içinde Array

var femaleUsers = ["Ayşe", "Fatma", "Zeynep"];
var maleUsers = ["Ahmet", "Mehmet", "Ali"];
items.unshift(femaleUsers);
console.log('====================================');
console.log(items);
console.log('====================================');
items.push(maleUsers);
console.log('====================================');
console.log(items);
console.log('====================================');
console.log(items.length);
console.log(items[0].length); // Array içindeki istediğimis Array'in lenth bilgisini aldık

console.log(items[0][0]); // Ayşe bilgisie ulaştık

console.log('===================================='); // Array icerisinden oge ayirmak -> splice(pos, item?)

var newItems = items.splice(2, 4);
console.log('====================================');
console.log("newItems : ", newItems);
console.log("items : ", items);
console.log('===================================='); // Array içerisindeki oğenin index bilgisini bulmak -> indexOf(item)

items.unshift("lorem");
items.push("ipsum");
console.log('====================================');
console.log(items.indexOf("ipsum"));
console.log('===================================='); // Array kopyalamak -> slice() [...ES6]

var copyItems = items;
console.log(items);
copyItems.pop(); // son elemanı cıkardık

console.log("copyItems : ", copyItems);
console.log("items : ", items);
console.log('====================================');
console.log("slice ile kopyalandıktan sonra");
copyItems = items.slice();
console.log("copyItems : ", copyItems);
console.log("items : ", items);
console.log("====================================");
var es6Items = [].concat(items); // ES6 ile kopyalama - es6 ve sonrasında gelen kopyalama işlemi

console.log(es6Items); // Array içerisindeki bilgiyi String'e çevirmek -> toString, join

console.log("toString : ", items.toString());
console.log("join : ", items.join(" --- ")); // iki Array bilgisini birleştirmek -> concat

var allUsers = [].concat(femaleUsers, maleUsers); // es6 ile iki arrayi birleştirme

console.log(allUsers); // istediğimiz index bilgisine oge eklemek -> splice(pos, 0, item)

allUsers.splice(allUsers.length, 0, "Melisa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);