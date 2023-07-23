// Array forEach Metodu

const PRODUCTS = ["Laptop", "Tablet", "Phone", "Desktop","Monitor","Mouse","Keyboard"]

// PRODUCTS.forEach((product, index, array) => array[index] = product+ " 111") // Array içindeki her bir eleman için fonksiyon çalıştırır.

PRODUCTS.forEach(
  (product, index, array) =>
    (array[index] = product + `${product.toUpperCase()}`)
)
console.log(PRODUCTS)   




/***
 * 
 * 
 const UL_DOM = document.querySelector("#userList")

for(let i=0; i<LOREM_LIST.length; i++){
    if(LOREM_LIST[i] === "dolor"){
        break
    }
    let LI_DOM  = document.createElement("li")
    LI_DOM.innerHTML = LOREM_LIST[i]
    UL_DOM.appendChild(LI_DOM)
}

 * 
 */

 const userListDOM = document.querySelector("#userList");
    PRODUCTS.forEach( item => {
  const liDOM = document.createElement("li");
  LiDOM.innerHTML = item;
  userListDOM.appendChild(LI_DOM);
})
