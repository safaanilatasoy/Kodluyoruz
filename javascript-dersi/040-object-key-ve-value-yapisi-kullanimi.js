// Object - Key Value

let laptop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    "2kg": 2,
    modelName: "Macbook Pro 2019",
}




// Dogru Anahtar bilgisi olusturmak
console.log(laptop1);
console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]);

// Anahtar bilgisine yeni deger eklemek

laptop1.brand = "Mac";
laptop1["brand"] = "Macbook Pro 2020";
console.log(laptop1);

// Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1);

// Anahtar bilgisine ulaşmak (keys) -> Object.keys()

keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));


keys.forEach(keyInfo => {
    console.log(keyInfo);
    console.log(laptop1[keyInfo]);

});
// Değer bilgilerine ulaşmak (values) -> Object.values()

console.log(Object.values(laptop1));

values = Object.values(laptop1);

values.forEach((valueInfo) => {
  console.log(valueInfo);
  valueInfo
});


