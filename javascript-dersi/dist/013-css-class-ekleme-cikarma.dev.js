"use strict";

// css class eklemek veya çıkartmak
var greeting = document.querySelector("#greeting");
greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class"); // birden fazla eklemek
// çıkartmak

greeting.classList.remove("title", "second-class", "third-class"); // birden fazla class silmek 

console.log(greeting.classList);