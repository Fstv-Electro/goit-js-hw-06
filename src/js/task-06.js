// Звикаю до написання констант на посилань

// const refs = {
//   input: document.querySelector("#validation-input"),
// };

// const dataLength = refs.input.getAttribute("data-length");

// refs.input.addEventListener("blur", (event) => {
// if (event.target.value.length == dataLength) {
//   refs.input.classList.add("valid");
//   refs.input.classList.remove("invalid");
// } else {
//   refs.input.classList.remove("valid");
//   refs.input.classList.add("invalid");
// }
// });

// refs.input.addEventListener("blur", (event) => {
//   const valid = "valid";
//   const invalid = "invalid";

//   onValidInvalid(event, valid, invalid);
// });

// function onValidInvalid(event, valid, invalid) {
//   if (event.target.value.length == dataLength) {
//     refs.input.classList.add(valid);
//     refs.input.classList.remove(invalid);
//   } else {
//     refs.input.classList.add(invalid);
//     refs.input.classList.remove(valid);
//   }
// }

const refs = {
  input: document.querySelector("#validation-input"),
};

const dataLength = Number(refs.input.getAttribute("data-length"));
refs.input.addEventListener("blur", onValidInvalid);

function onValidInvalid(event) {
  if (event.target.value.length === dataLength) {
    updateClass("valid", "invalid");
  } else {
    updateClass("invalid", "valid");
  }
}

function updateClass(add, rem) {
  refs.input.classList.add(add);
  refs.input.classList.remove(rem);
}
