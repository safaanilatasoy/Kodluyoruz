// Break & Continue

const LOREM_LIST = ['lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit']

let counter = 0

// for(; counter<10; counter++){
//     if(counter === 5){
//         break   
//     }
//     console.log(counter)
// }


for (; counter < 10; counter++) {
  if (counter === 5) {
    continue
  }
  console.log(counter);
}

// Break ---> işlemi bitirir
// Continue ---> işlemi atlar


const UL_DOM = document.querySelector("#userListDOM")

for(let i=0; i<LOREM_LIST.length; i++){
    if(LOREM_LIST[i] === "dolor"){
        break
    }
    let LI_DOM  = document.createElement("li")
    LI_DOM.innerHTML = LOREM_LIST[i]
    UL_DOM.appendChild(LI_DOM)
}