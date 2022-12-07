let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)


let link = document.querySelector("ul#list>li>a")
link.innerHTML = 'link bilgisi değişti'
link.style.color="red"
link.classList.add('btn')