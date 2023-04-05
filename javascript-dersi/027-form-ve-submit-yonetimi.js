// Form ve submit yönetimi

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(){
    event.preventDefault()
    console.log("Form gönderildi")
}