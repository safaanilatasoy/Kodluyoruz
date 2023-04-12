"use strict";

// FORMLARLA ÇALIŞMAK: BÖLÜM SONU EXERCISES

/*
1: Formu seç
2: Input bilgisini UL içine ekle
3: Form içindeki bilgiyi sıfırla
4: Eğer forma bilgi girilmezse kullanıcıyı uyar
*/
var userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler);
var alertDOM = document.querySelector('#alert');

var alertFunction = function alertFunction(title, message) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "warning";
  return "\n<div class=\"alert alert-".concat(className, " alert-dismissible fade show\" role=\"alert\">\n  <strong>").concat(title, "</strong> ").concat(message, "\n  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n</div>");
};

function formHandler(event) {
  event.preventDefault();
  var USER_NAME = document.querySelector('#username');
  var SCORE = document.querySelector('#score');

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value); //Gönderdikten sonra sıfırladık

    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction("Baslik bilgisi", "Eksik bilgi girdiniz");
  }
}

var userListDOM = document.querySelector('#userList');

var addItem = function addItem(userName, score) {
  var liDOM = document.createElement('li');
  liDOM.innerHTML = "\n    ".concat(userName, "\n    <span class=\"badge bg-primary rounded-pill\">").concat(score, "</span>\n     \n    ");
  liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  userListDOM.append(liDOM);
};