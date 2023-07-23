// For dongusu


// for([baslangic degeri]; [kosul]; [artis degeri]) {
    // kodlar
// }

let users = ["Lorem", "Ipsum", "Dolor"]
const userListDOM = document.querySelector("#userList")

for(let i = 0; i < users.length; i++){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[i]
    userListDOM.appendChild(liDOM)
}
