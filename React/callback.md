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
