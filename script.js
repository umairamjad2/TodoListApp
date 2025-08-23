let addBtn = document.querySelector("#add-Btn");
let input = document.querySelector("#taskInput");
let ul = document.querySelector("ul");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input.value;

  if (li.innerText != "") {
    ul.appendChild(li);
    input.value = "";
  }

  let delbtn = document.createElement("img");
  delbtn.src = "images/delete-icon.svg";
  // delbtn.src = "delete-icon.svg";
  delbtn.alt = "Delete";
  delbtn.classList.add("delete-icon");
  li.appendChild(delbtn);

  delbtn.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });
});
