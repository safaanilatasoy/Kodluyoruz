// Local storage işlemleri

let user = {userName: "safaanilatasoy", isActive: true}
console.log(user);
localStorage.setItem("userInfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo")  //bilgiyi al
userInfo = JSON.parse(userInfo)  //bilgiyi parse et
console.log(userInfo)

let items = [1,2,3,user]

localStorage.setItem("newItem", JSON.stringify(items))
localStorage.getItem("newItem")
JSON.parse(localStorage.getItem("newItem"))
