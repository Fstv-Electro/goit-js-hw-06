const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("change", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
