function getData(data){
    return new Promise((resolve,reject) => {
        console.log('Veriler alınmaya çalışılıyor..');

        if(data){
            resolve('Veriler alındı');
        }else{
            reject('Veriler alınamadı');
        }
    })
}

function cleanData(receivedData){
    return new Promise((resolve,reject) => {
        console.log('Veriler düzenleniyor..');

        if(receivedData){
            resolve('Veriler düzenlendi');
        }else{
            reject('Veriler düzenlenemedi');
        }
    })
}

// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(false);
//     }).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     })


 // * ─── Async - Await Structure ─────────────────────────────────────────────────
//  * Async yapısının promise yapısına göre avantajı yazımının ve takibinin daha kolay olmasıdır. Bu sebeple kullanımı daha yaygındır.

 

// async function processData(){
//     try{
//         const receivedData = await getData(true);
//         console.log(receivedData);
//         const cleanedData = await cleanData(false);
//         console.log(cleanedData);
//     } catch(err){
//         console.log(err);
//     }



// }

// processData();




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
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    // reject("BİR HATA OLUŞTU");
  });

  return promise1;
};


// addBook({ name: "Book 10", author: "Yazar 11" })
//   .then(() => {
//     console.log("Yeni Liste");
//     listBooks();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function showBooks(){
    try{
        await addBook({ name: "Book 12", author: "Yazar 12" });
        listBooks();
    }catch(err){
        console.log(err);
    }
}
showBooks();