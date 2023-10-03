  
  
  
// * ───────────────────────────Node Js File System Modülü ──────────────────────────────────────────────
// * fs modülü ile dosya işlemleri yapılabilir. ve fs modülü bu şekilde import edilir ve kullanılır.
  
const fs = require('fs');


// *─── Dosya Okumak ────────────────────────────────────────────────────────────

// fs.readFile('password.txt', 'utf8', (err, data) => {
//     if(err) console.error(err);
//     console.log(data);
//     console.log('DOSYA OKUNDU');
// })

// * ─── Dosya Yazmak ────────────────────────────────────────────────────────────

// fs.writeFile("example.json", '{"name": "Anil", "age": 25}', "utf8", (err) => {
//     if(err) console.error(err);
//     console.log('DOSYA BASARILI BIR SEKILDE YAZILDI');
// }); 



// * ─── Veri Eklemek ───────────────────────────────────────────────────────

// fs.appendFile("example.txt", '\nHello World!', "utf8", (err) => {
//   if (err) console.error(err);
//   console.log("YENİ VERİ EKLENDİ");
// }); 


// * ─── Dosya Silmek ────────────────────────────────────────────────────────────

// fs.unlink('example.json', (err) => {
//     if(err) console.error(err);
//     console.log('DOSYA BASARILI BIR SEKILDE SILINDI');
// })

//* ─── Klasörler Oluşturmak ────────────────────────────────────────────────────

// fs.mkdir('uploads/img',{recursive: true}, (err) => {
//     if(err) console.error(err);
//     console.log('KLASORLER OLUSTURULDU');
// })

//* ─── Klasör Silmek ────────────────────────────────────────────────────


// fs.rmdir("uploads", { recursive: true }, (err) => {
//   if (err) console.error(err);
//   console.log("KLASORLER SİLİNDİ");
// });
