/****form handling*****/

const form = document.querySelector("form");
const outputFornavn = document.querySelector(".fornavn_output");
const outputEfternavn = document.querySelector(".efternavn_output");
const outputAlder = document.querySelector(".alder_output");
const outputKendetegn = document.querySelector(".kendetegn_output");
const outputBeskrivelse = document.querySelector(".beskrivelse_output");

console.log(form);

function formSubmit(event) {
  event.preventDefault();
  console.log("formen er submittet");
  const formData = new FormData(form);

  outputFornavn.textContent = formData.get("fornavn");
  outputEfternavn.textContent = formData.get("efternavn");
  outputAlder.textContent = formData.get("alder");
  outputKendetegn.textContent = formData.getAll("kendetegn").join(",  ");
  outputBeskrivelse.textContent = formData.get("beskriv_oplevelse");

  form.reset();
}

form.addEventListener("submit", formSubmit);
