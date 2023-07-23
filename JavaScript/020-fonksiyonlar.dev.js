"use strict";

// fonsiyon tanımlama
// function hello(){
//     console.log("Merhaba")
// }
// function helloWorld(){
//     console.log("Hello World")
//     helloWorld()
// }
// function userCheck(userName, age){
//     if(userName && age >= 18){
//         info.innerHTML = "ehliyet alabilirsiniz"
//     }else if (!userName){
//         info.innerHTML = "Kullanici adiniz yok"
//     }else if (!(age >= 18 )){
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yaşından küçüksünüz"
//     }
// }
// hello() //Çalıştır
// Temel kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir
// 2: Bir fonkdiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir
var firstName = "Lorem";

function greetings() {
  var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  // default parametre alıyor
  // console.log(`Merhaba ${firstName ? firstName : ""}`);
  console.log("Merhaba ".concat(firstName));
}

console.log(firstName); //Degisken

greetings(); // fonksiyona parametre göndermedik

greetings("Parametre");

function greetings2(firstName, lastName) {
  var info = "Merhaba ".concat(firstName, " ").concat(lastName);
  return info;
}

greetings2("Ad", "Soyad"); // let info = "deneme" // ??? 

console.log(greetingsInfo);

function domIdWriteInfo(paramid, info) {
  var domObject = document.querySelector("#".concat(id));
  domObject.innerHTML = info;
}

domIdWriteInfo('greeting', greetings2("Lorem", "Ipsum"));