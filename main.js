let alkaliGroup = document.querySelector(".alkali--group");
let alkalinEarthGroup = document.querySelector(".alkaline-earth--group");
let transitionMetalsGroup = document.querySelector(".transition-metals--group");
let otherMetalsGroup = document.querySelector(".other-metals--group");
let otherNonmetalsGroup = document.querySelector(".other-nonmetals--group");
let halogensGroup = document.querySelector(".halogens--group");
let nobleGasesGroup = document.querySelector(".noble-gases--group");
let rareEarthElementsGroup = document.querySelector(
  ".rare-earth-elements--group"
);
let actinoidElementsGroup = document.querySelector(".actinoid-elements--group");

let alkaliMetals = document.querySelectorAll(".alkali-metals");
let alkalineEarthMetals = document.querySelectorAll(".alkaline-earth-metals");
let transitionMetals = document.querySelectorAll(".transition-metals");
let otherMetals = document.querySelectorAll(".other-metals");
let otherNonmetals = document.querySelectorAll(".other-nonmetals");
let halogens = document.querySelectorAll(".halogens");
let nobleGases = document.querySelectorAll(".noble-gases");
let rareEarthElements = document.querySelectorAll(".rare-earth-elements");
let actinoidElements = document.querySelectorAll(".actinoid-elements");

function getAlkaliMetals() {
  alkaliGroup.classList.toggle("highlited--on");
  alkaliMetals.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getAlkalineEarthMetals() {
  alkalinEarthGroup.classList.toggle("highlited--on");
  alkalineEarthMetals.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getTransitionMetals() {
  transitionMetalsGroup.classList.toggle("highlited--on");
  transitionMetals.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getOtherMetals() {
  otherMetalsGroup.classList.toggle("highlited--on");
  otherMetals.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getOtherNonmetals() {
  otherNonmetalsGroup.classList.toggle("highlited--on");
  otherNonmetals.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getHalogens() {
  halogensGroup.classList.toggle("highlited--on");
  halogens.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getNobleGases() {
  nobleGasesGroup.classList.toggle("highlited--on");
  nobleGases.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getRareEarthElements() {
  rareEarthElementsGroup.classList.toggle("highlited--on");
  rareEarthElements.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

function getActinoidElements() {
  actinoidElementsGroup.classList.toggle("highlited--on");
  actinoidElements.forEach(function (value) {
    value.classList.toggle("color-light--on");
  });
}

alkaliGroup.addEventListener("click", getAlkaliMetals);
alkalinEarthGroup.addEventListener("click", getAlkalineEarthMetals);
transitionMetalsGroup.addEventListener("click", getTransitionMetals);
otherMetalsGroup.addEventListener("click", getOtherMetals);
otherNonmetalsGroup.addEventListener("click", getOtherNonmetals);
halogensGroup.addEventListener("click", getHalogens);
nobleGasesGroup.addEventListener("click", getNobleGases);
rareEarthElementsGroup.addEventListener("click", getRareEarthElements);
actinoidElementsGroup.addEventListener("click", getActinoidElements);
