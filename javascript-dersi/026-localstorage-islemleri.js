// Local storage işlemleri

let user = {userName: "safaanilatasoy", isActive: true}
console.log(user);
localStorage.setItem("userInfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo")  //bilgiyi al
userInfo = JSON.parse(userInfo)  //bilgiyi parse et
console.log(userInfo)

