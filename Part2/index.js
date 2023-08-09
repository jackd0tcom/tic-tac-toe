let id = document.querySelector("#idInput");
let style = document.querySelector("#styleInput");

let setCard = () => {
  const card = document.querySelector(`#${idInput.value}`);
  card.style.color = styleInput.value;
};
