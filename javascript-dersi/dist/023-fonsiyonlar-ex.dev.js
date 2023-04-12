"use strict";

// Fonksiyonlar bölüm sonu egzersizleri
var counter = 0;
var counterDOM = document.querySelector('#counter');
var increaseDOM = document.querySelector('#increase');
var decreaseDOM = document.querySelector('#decrease');
counterDOM.innerHTML = counter;
increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id);

  if (this.id == "increase") {
    counterDOM.innerHTML = ++counter;
  } else if (this.id == "decrease") {
    counterDOM.innerHTML = --counter;
  }
}