const promise1 = new Promise((resolve,reject) =>{
    resolve('veriler alındı');
    // reject('Bir hata oluştu');
})
// console.log(promise1);

// promise1.then(value =>{
//     console.log(value);
// })

promise1.catch(error =>{
    console.log(error);
})