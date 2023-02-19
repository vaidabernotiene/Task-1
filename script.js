/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search");
const outputEl = document.querySelector("#output");

formEl.addEventListener("submit", outputFunc);

function outputFunc(e) {
  e.preventDefault();

  outputEl.innerHTML = "";
  lb();
  g();
  oz();
}

function lb() {
  let p1El = document.createElement("p");
  p1El.id = "search";
  p1El.textContent = `${inputEl.value} kg = ${inputEl.value * 2.2046} lb.`;
  outputEl.append(p1El);
}

function g() {
  let p2El = document.createElement("p");
  p2El.id = "search";
  p2El.textContent = `${inputEl.value} kg = ${inputEl.value / 0.001} g.`;
  outputEl.append(p2El);
}

function oz() {
  let p3El = document.createElement("p");
  p3El.id = "search";
  p3El.textContent = `${inputEl.value} kg = ${inputEl.value * 35.274} oz.`;
  outputEl.append(p3El);
}
