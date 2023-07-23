"use strict";

// localStorage bölüm sonu egzersizleri
var counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
var counterDOM = document.querySelector('#counter');
var increaseDOM = document.querySelector('#increase');
var decreaseDOM = document.querySelector('#decrease');
counterDOM.innerHTML = counter;
increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  this.id == "increase" ? counter += 1 : counter -= 1;
  localStorage.setItem("counter", counter);
  counterDOM.innerHTML = counter;
}