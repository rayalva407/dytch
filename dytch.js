function changeTitle(newTitle) {
  currentTitle = document.querySelector("title");
  currentTitle.innerText = newTitle;
}

let change = prompt("Please enter new tab name");

changeTitle(change);
