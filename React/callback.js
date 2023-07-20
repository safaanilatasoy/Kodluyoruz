
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

//  import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((data) => data.json())
//   .then((user) => {
//     console.log("User Yuklendi!",user);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => console.log("Post Yuklendi!",post));
//   });


// async function getData(){
//     const user = await ( await fetch("https://jsonplaceholder.typicode.com/users/1")).json();

    

//     const post = await (
//       await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//      const post2 = await (
//        await fetch("https://jsonplaceholder.typicode.com/posts/2")
//      ).json();

//     console.log("user 1", user); 
//     console.log("post 1", post);
//     console.log("post 2", post2);
// }

// getData();

// import axios from "axios";

// async function getData() {
//   const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/1");

//   const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//   const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//   console.log("user 1", user);
//   console.log("post 1", post);
//   console.log("post 2", post2);
// }

// getData();

// import axios from "axios";

// const getComments = (number) => {
//     return new Promise(async (resolve, reject) => {
//         const {data} = await axios("https://jsonplaceholder.typicode.com/users/1");
        
//         resolve(data);
//     });

    
// }

// getComments(2)
// .then((data) => {
//     console.log(data);
// }).catch(e => console.log(e));

import axios from "axios";

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );

    resolve(data);
  });
};

getPost(1)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));