



function loadList() {
  const list = document.getElementById("list");
  const items = JSON.parse(localStorage.getItem("items")) || [];

  for (const item of items) {
    const listItem = document.createElement("li");
    listItem.innerText = item;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&times;";
    deleteButton.classList.add("close");
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);

      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items));
      }
    });

    listItem.appendChild(deleteButton);
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

  const deleteButton = document.createElement("button"); // Sil düğmesini oluşturun
  deleteButton.innerHTML = "&times;";
  deleteButton.classList.add("close"); // Bootstrap close sınıfını ekleyin
  deleteButton.addEventListener("click", () => {
    // Sil düğmesine tıklanınca
    list.removeChild(listItem); // Öğeyi listeden kaldırın

    const items = JSON.parse(localStorage.getItem("items")) || [];
    const index = items.indexOf(value);
    if (index > -1) {
      items.splice(index, 1); // Öğeyi localStorage'den kaldırın
      localStorage.setItem("items", JSON.stringify(items));
    }
  });

  listItem.appendChild(deleteButton); // Sil düğmesini öğenin sonuna ekleyin
  list.appendChild(listItem);

  const items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(value);
  localStorage.setItem("items", JSON.stringify(items));

  input.value = ""; // Input alanını temizleyin

  // Toast öğesini seçin
  const toast = document.querySelector(".toast");

  // Toast mesajını güncelleyin
  const toastMessage = toast.querySelector(".toast-body");
  toastMessage.textContent = "Yeni bir öğe eklendi.";

  // Toast öğesini gösterin
  const bootstrapToast = new bootstrap.Toast(toast);
  bootstrapToast.show();
}

function clearList(){
    localStorage.clear();
    location.reload();

    
}


