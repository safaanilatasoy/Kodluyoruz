"use strict";

var item = document.querySelector("ul#list>li:last-child");
item.innerHTML = "son oge degisti...";
var firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degisti...";
var ulDOM = document.querySelector("ul#list");
var liDOM = document.createElement('li');
liDOM.innerHTML = "Kendi olusturdugumuz oge"; // ulDOM.append(liDOM)   En sona ekler

ulDOM.prepend(liDOM);