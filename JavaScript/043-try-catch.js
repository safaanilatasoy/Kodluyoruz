// Hata yönetimi için try catch kullanımı

let products;

try{
    products.forEach((item) => console.log(item));
} catch(error){
    console.log("error: ", error);
    // products = [1,2,3,4];
    // products.forEach((item) => console.log(item));
}




console.log("hata yonetimi duzgun calisiyor");


let info = "kodluyoruz";
console.log(info);