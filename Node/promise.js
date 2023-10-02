// const promise1 = new Promise((resolve,reject) =>{
//     resolve('Veriler alındı');
//     reject('Bir hata oluştu');
// })
// // console.log(promise1);

//  promise1
//     .then(value =>{
//         console.log(value);
//     }).catch(error =>{
//         console.log(error);
//     })



const books = [
  { name: "Book 1", author: "Yazar 1" },
  { name: "Book 2", author: "Yazar 2" },
  { name: "Book 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook, callback) => {

    const promise1 = new Promise ((resolve,reject) => {
        books.push(newBook);
        // resolve(books);
        reject('BİR HATA OLUŞTU');
    })

  return promise1;
};

// listBooks();

addBook({ name: "Book 10", author: "Yazar 11" })
    .then(() => {
        console.log('Yeni Liste');
        listBooks();
    }).catch((error) => {
        console.log(error);
    });

