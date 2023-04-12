"use strict";

// DOM etkinlikleriyle çalışmak
var greeting = document.querySelector("#greeting");
greeting.addEventListener("mouseover", domClick);

function domClick() {
  console.log("event checked"); // console.log(this.innerHTML="information changed");
  // this.style.color="red"

  this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
}