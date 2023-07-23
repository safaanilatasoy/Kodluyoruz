const products = ["Mikrofon", "Telefon", "Bilgisayar" , "Klavye", "Fare", "Kulaklık", "Kamera"]


// Aşşağıdaki örnekte harf sayısı 5'ten fazla olan elemanları 
// filter() metodu ile filtreleyip, newProducts adında oluşturduğum yeni diziye atadım.
const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts)


const users = [
  { fullName: "Mehmet Veli", isActive: false },
  { fullName: "Ahmet Yılmaz", isActive: true },
  { fullName: "Oğuz Şahin", isActive: true },
  { fullName: "Ali Duran", isActive: false },
];

const activeUsers = users.filter(user => user.isActive === false)
console.log(activeUsers)