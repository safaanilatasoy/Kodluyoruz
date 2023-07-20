# Callback Fonksiyonu

## setTimeout()

setTimeout() fonksiyonu, vereceğiniz parametredeki süre tamamlandıktan sonra bir kere çalışıyor.

```javascript
 setTimeout(() => {
  console.log('====================================');
  console.log('Merhaba');
  console.log('====================================');
 }, 2000)

```

## setInterval() 

setInterval() vereceğiniz parametrede her saniyede bir kez çalışır ve durdurmazsanız sonsuza kadar çalışır.

```javascript
 setTimeout(() => {
  console.log('====================================');
  console.log('Merhaba');
  console.log('====================================');
 }, 2000)

```

## Bir fonksiyonu parametre olarak vermek


```javascript
const sayHi = (cb) => {
    cb();
}

sayHi(() => {
    console.log("Hello");
});

```

## fetch()

Bir veri kaynağına gidip veri çekmeye yarar

```javascript

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => data.json())
  .then((user) => {
    console.log("User Yuklendi!",user);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((post) => console.log("Post Yuklendi!",post));
  });

```
İlk olarak user yüklenir daha sonra post yüklenir

* Eğer yukarıdaki iki data çekme işlemini ayrı olarak yazsaydım herhangi bir sıra belirleyemezdim. Bazen post önce yüklenirdi bazen user datası önce yüklenirdi.
Bu sebeple bu şekilde senkron olarak yazmak sıra belirlememizde yardımcı olur

### Output

```
User Yuklendi! {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}
Post Yuklendi! {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
```

Pekii biz her seferinde böyle tek tek sıralamak mı zorundayız? işte burada aşşağıdaki 
terimler devreye giriyor.

## async-await 

async-await sayesinde kodumuzun okunabilirliğini yükseltiriz ve data çekme sıralamasını daha kolay bir şekilde belirleyebiliriz

```javascript

async function getData(){
    const user = await ( await fetch("https://jsonplaceholder.typicode.com/users/1")).json();

    

    const post = await (
      await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

     const post2 = await (
       await fetch("https://jsonplaceholder.typicode.com/posts/2")
     ).json();

    console.log("user 1", user); 
    console.log("post 1", post);
    console.log("post 2", post2);
}

getData();


```

### Output

```
user 1 {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}
post 1 {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
post 2 {
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae\n' +
    'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
    'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
    'qui aperiam non debitis possimus qui neque nisi nulla'
}

```

## Axios Kütüphanesi

node-fetch kütüphanesiyle aynı görevi yapar ancak kullanımı daha kolaydır

### Installation

```
npm i axios
```
### Import 

```
import axios from "axios";
```
### Kulanım

```javascript

import axios from "axios";

async function getData() {
  const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/1");

  const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/1");

  const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

  console.log("user 1", user);
  console.log("post 1", post);
  console.log("post 2", post2);
}

getData();

```

