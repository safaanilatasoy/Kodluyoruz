
// setTimeout() fonksiyonu, vereceğiniz parametredeki süre tamamlandıktan sonra bir kere çalışıyor.
// setTimeout(() => {
//  console.log('====================================');
//  console.log('Merhaba');
//  console.log('====================================');
// }, 2000)


// setInterval() vereceğiniz parametrede her saniyede bir kez çalışır ve durdurmazsanız sonsuza kadar çalışır.
// setInterval(() => {
//   console.log("====================================");
//   console.log("setInterval() bir kere çalıştı");
//   console.log("====================================");
// }, 1000);


// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Hello");
// });

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => data.json())
  .then((user) => {
    console.log("User Yuklendi!",user);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((post) => console.log("Post Yuklendi!",post));
  });