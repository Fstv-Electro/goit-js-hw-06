function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  colorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorValue: document.querySelector(".color"),
};

refs.colorBtn.addEventListener("click", (event) => {
  let randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.colorValue.textContent = randomColor;
});
