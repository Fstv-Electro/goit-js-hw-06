const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    outputEl.textContent = event.target.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
});
