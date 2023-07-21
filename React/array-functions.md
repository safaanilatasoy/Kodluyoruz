# Array Functions

    1. push
    2. map
    3. find
    4. filter
    5. some
    6. every
    7. includes

## push()

Array'in sonuna bir eleman ekler.

```javascript

const users = ["Mehmet", "Ahmet", "Murat"];

const newArray = users.push('Ayşe');

console.log(users);


```

## map()

* React Componentlerinde en çok kullanılan fonksiyondur.
* Arrayin her bir elemanını tek tek döner.


```javascript

users.map((user) => {
    console.log(item);
});

```

## find()

Array'in içerisinde verilen koşullarda bir arama işlemi yapar.


! verilen koşullara uygun ilk elemanı bulduğu anda response'u döner.

```javascript
const result = users.find((item) => item.name === "Ahmet"); 
console.log(result);

```

## fiter()

Arrayin içinde filtreleme yapar ve uyan sonuçları getirir.


```javascript
const filtered = users.filter((item) => item.name === "Mehmet" && item.age<20);
console.log(filtered);

```

## some()

Arrayin içindeki elemanlardan herhangi biri verdiğimiz koşula uyuyorsa `True` döner. Eğer uymuyorsa `False` döner.


```javascript
const some  = users.some((item) => item.age === 10);
console.log(some);

```

## every()

Arrayin içindeki bütün elemanlar verdiğimiz şarta uyuyorsa `True` döner.

```javascript
const everyFunc  = users.every((item) => item.age === 18);
console.log(everyFunc);

```

## includes()

Eğer array verdiğimiz ifadeyi içeriyorsa `True` döner.

```javascript

const meyveler = ["elma","armut","muz"];

const isIncluded  = meyveler.includes('muz');
console.log(isIncluded);

```
