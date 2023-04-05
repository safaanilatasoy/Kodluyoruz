// Array - dizilerle çalışmak

// Array oluşturmak

let domain ="kodluyoruz"
isActive = false
let items = [15,25,35, isActive, domain]
console.log(items)

let emptyArray = [] // Bos liste olusturmak

// array içerisindeki eleman-oge sayisini öğrenmek
console.log(items.length) // array içindeki oge sayisini verir


// array içindeki ilk elemanin cagirilmasi 
console.log("İlk Eleman :", items[0]) // 15


// Array içindeki son elemanin cagirilmasi
console.log("Son Eleman :", items[items.length - 1]); // kodluyoruz


// Array içindeki ortadaki elemanin cagirilmasi
console.log("Ortadaki Eleman :", items[Math.floor(items.length/2)]) // 25

// degisken içindeki bilginin array olup olmadığının kontrol edilmesi
console.log(
typeof(items)   //object olarak çıktı verir
)

console.log(
    Array.isArray(items) // true
)

// Hangileri isArray bilgisidir
console.log("[] :", Array.isArray([]))

console.log("1 :", Array.isArray(1));

console.log("true :", Array.isArray(true));