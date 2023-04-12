"use strict";

// For dongusu
// for([baslangic degeri]; [kosul]; [artis degeri]) {
// kodlar
// }
var users = ["Lorem", "Ipsum", "Dolor"];
var userListDOM = document.querySelector("#userList");

for (var i = 0; i < users.length; i++) {
  var liDOM = document.createElement("li");
  liDOM.innerHTML = users[i];
  userListDOM.appendChild(liDOM);
}