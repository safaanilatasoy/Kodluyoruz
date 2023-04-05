// FORMLARLA ÇALIŞMAK: BÖLÜM SONU EXERCISES

/*
1: Formu seç
2: Input bilgisini UL içine ekle
3: Form içindeki bilgiyi sıfırla
4: Eğer forma bilgi girilmezse kullanıcıyı uyar
*/

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    addItem(USER_NAME.value, SCORE.value)
}

/* <li class="list-group-item d-flex justify-content-between align-items-center">
  A list item
  <span class="badge bg-primary rounded-pill">14</span>
</li>; */

let userListDOM = document.querySelector('#userList')
const addItem=(username, score) =>   {
    let liDOM = document.createElement('li')
    liDOM.innerHTML =`${username} ${score}`
    userListDOM.append(liDOM)

}
