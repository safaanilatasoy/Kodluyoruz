"use strict";

// Form ve submit yönetimi
var formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit() {
  event.preventDefault();
  console.log("Form gönderildi");
  var scoreInputDOM = document.querySelector("#score");
  console.log(scoreInputDOM.value);
  localStorage.setItem("score", scoreInputDOM.value);
}