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

let firstName = "Lorem"

function greetings(firstName=""){       // default parametre alıyor
    // console.log(`Merhaba ${firstName ? firstName : ""}`);
    console.log(`Merhaba ${firstName}`);
}  



console.log(firstName); //Degisken
greetings() // fonksiyona parametre göndermedik
greetings("Parametre")


function greetings2(firstName, lastName) { 
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}
greetings2("Ad", "Soyad")
// let info = "deneme" // ??? 
console.log(greetingsInfo);

function domIdWriteInfo(paramid, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo('greeting',greetings2("Lorem", "Ipsum"));