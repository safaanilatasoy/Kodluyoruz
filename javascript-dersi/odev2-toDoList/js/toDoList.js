



function loadList() {
  const list = document.getElementById("list");
  const items = JSON.parse(localStorage.getItem("items")) || [];

  for (const item of items) {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    list.appendChild(listItem);
  }
}

loadList();


const form = document.querySelector("form");
form.addEventListener("submit", newElement);

function newElement(event) {
  event.preventDefault(); // Sayfanın yenilenmesini önlemek için

  const input = document.getElementById("task");
  const value = input.value.trim(); // Boşlukları kaldırmak için

  if (value === "") {
    return;
  }

  const list = document.getElementById("list");
  const listItem = document.createElement("li");
  listItem.innerText = value;
  list.appendChild(listItem);

  const items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(value);
  localStorage.setItem("items", JSON.stringify(items));


  input.value = ""; // Input alanını temizleyin
}

function clearList(){
    localStorage.clear();
    location.reload();
}