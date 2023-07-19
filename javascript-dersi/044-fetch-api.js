// Fetch API ile Çalışmak
// Bir veri sunucudan geldikten sonra işlem yapabilmek ve sunucudan veri çekebilmek için kullanılır.

fetch("data/settings.json").then(
    response => {
        return response.json();
}).then(responseJson =>{
    console.log(responseJson);
    console.log(responseJson.userName);
})