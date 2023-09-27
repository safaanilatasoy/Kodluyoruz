// console.log('1. Task');
// console.log("2. Task");
// console.log("3. Task");

// const func1 = () => {
//     console.log('Function 1 Completed');
// };
// const func2 = () => {
//   console.log("Function 2 Completed");
// };

// func1();
// func2();

// const func1 = () => {
//   console.log("Function 1 Completed");
//   func2();
// };

// const func2 = () => {
//   console.log("Function 2 Completed");
//   func3();
// };

// const func3 = () => {
//   console.log("Function 3 Completed");
// };

// func1();

// const func1 = () => {
//   console.log("Function 1 Completed");
//   func3();
// };

// const func2 = () => {
//   console.log("Function 2 Completed");
// };

// const func3 = () => {
//   console.log("Function 3 Completed");
//   func2();
// };

// func1();

// Singl Thread --- JS Senkron çalışır.


// let x = 5; 
// console.log(x);


// setTimeout(() => {
//     x = x + 5;
    
// },5000);
// console.log(x);


// x = x + 5;
// console.log(x);


const books = [
  { name: "Book 1", author: "Yazar 1" },
  { name: "Book 2", author: "Yazar 2" },
  { name: "Book 3", author: "Yazar 3" }
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

 
 
const addBook = (newBook, callback) => {
     books.push(newBook);
     callback();
};


// listBooks();

addBook({ name: "Book 4", author: "Yazar 4" }, listBooks);



