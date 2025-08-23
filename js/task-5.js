function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const background = document.querySelector("body");
const color = document.querySelector(".color");
changeColorBtn.addEventListener("click", ChangeColor);
function ChangeColor(event) {
  background.style.backgroundColor = getRandomHexColor();
  color.textContent = background.style.backgroundColor;
}
