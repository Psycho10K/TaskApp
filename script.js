const inputBox = document.getElementById("input-box");
const containerList = document.getElementById("container-list");

function addTask() {
  if (inputBox.value === "") {
    alert("write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    containerList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
}

function saveData() {
  localStorage.setItem("data", containerList.innerHTML);
}

function showTask() {
  containerList.innerHTML = localStorage.getItem("data");
}

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

containerList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

showTask();