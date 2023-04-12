"use strict";

// Arrow fonksiyonu kullanımı
function hello(firstName) {
  console.log("Merhaba ".concat(firstName));
}

hello("Javascript");

var helloFuncV1 = function helloFuncV1(firstName) {
  console.log("Merhaba ".concat(firstName));
};

helloFuncV1("helloFuncV1");

var helloFuncV2 = function helloFuncV2(firstName) {
  // Bir parametre, bir dönüi
  console.log("Merhaba ".concat(firstName));
};

helloFuncV2("helloFuncV2");

var helloFuncV3 = function helloFuncV3(firstName, lastName) {
  // birden fazla değişken ve birden fazla işlem olduğunda süslü parantez kullanılmak zorundadır
  console.log("Merhaba ".concat(firstName, " ").concat(lastName));
};

helloFuncV3("helloFuncV3", "Last Name Info");

var helloFuncV4 = function helloFuncV4(firstName, lastName) {
  var info = "Merhaba ".concat(firstName, " ").concat(lastName);
  console.log(info);
  return info;
};

helloFuncV4("helloFuncV4", "Other info");