// Form ve submit yönetimi

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)


function formSubmit(){
    event.preventDefault()
    console.log("Form gönderildi")
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)
    localStorage.setItem("score", scoreInputDOM.value)
}