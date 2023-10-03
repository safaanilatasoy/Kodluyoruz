// * ─────────────────────────── Ödev #4 || Dosya oluşturma, okuma ve veri ekleme ──────────────────────────────────────────────


const fs = require("fs");


fs.writeFile('employes.json','{"name": "Employee 1 Name", "salary": 2000}', 'utf-8',(err)=>{
    if(err) console.error(err);
    console.log('Dosya Oluşturuldu');
})

fs.appendFile("employes.json", '\n{"name": "Employee 2 Name", "salary": 3000}', "utf-8", (err) => {
    if (err) console.error(err);
    console.log("YENİ VERİ EKLENDİ");
});

fs.unlink('employes.json', (err) => {
    if(err) console.error(err);
    console.log('DOSYA BASARILI BIR SEKILDE SILINDI');
})

