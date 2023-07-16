// Object ve array destructing nasaıl kullanılır
// Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.


// Object Destructing

let settings = {
    userName : "lorem",
    password : "ipsum",
    isActive : false,
    ip : "127.0.0.1",
    serverName : "lorem-ipsum.org"


};


// Obje içindeki bilgilerin tek seferde çıkarılması

// let userName = settings.userName;
// console.log(userName);
// rename && destructing

let {userName: user, password, isActive, ip: serverIP, serverName} = settings
console.log(user, password, isActive, serverIP, serverName)
console.log(settings)
console.log(user)


// Obje içindeki bazı bilgilerin çıkarılması

let {userName: userName2, password: password2, isActive: isActive2, ...newSettings} = settings
// Eğer değişken isimleri daha önce tanımlanmadıysa 
console.log(userName2, password2, isActive2, newSettings)

// Objenin destructing ile kopyalanması



// HATALI KULLANIM
// let settings2 = settings

// settings2.userName = "Degisen bilgi"

// console.log("setting:", settings)
// console.log("setting2:", settings2);



// DOĞRU KULLANIM
let settings2 = {...settings}
settings2.userName = "Degisen bilgi"
console.log("setting:", settings)
console.log("setting2:", settings2)



let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = [score]
console.log(score1, score2, ...otherScore)

// Array kopyalama Object kopyalama ile aynı sadece süslü parantez yerine köşeli parantez kullanılır
let scoreCopy = [...score]
console.log(scoreCopy)