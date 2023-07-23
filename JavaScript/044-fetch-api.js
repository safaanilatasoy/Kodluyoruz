// Fetch API ile Çalışmak
// Bir veri sunucudan geldikten sonra işlem yapabilmek ve sunucudan veri çekebilmek için kullanılır.


// JSON Dosyasından Veri Çekmek
fetch("data/settings.json").then(
    response => {
        return response.json();
}).then(responseJson =>{
    console.log(responseJson);
    console.log(responseJson.userName);
})

let userListDOM = document.querySelector("#userList");

// API Üzerinden Veri Çektik
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => 
  {
    responseJson.forEach(item => {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = item.title;
        userListDOM.appendChild(liDOM);
    })
  });