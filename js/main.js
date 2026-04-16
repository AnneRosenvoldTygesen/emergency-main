/******HOTSPOTHJERTE***/

/****mouseover***/
document.querySelector("#Hotspothjerte").addEventListener("mouseover", mouseoverHjerte);

function mouseoverHjerte() {
  console.log("mouseoverHjerte");

  animateBoxes();

  document.querySelector("#HotspothjerteBg").style.fill = "#50bfe2";
}

/****mouseout***/
document.querySelector("#Hotspothjerte").addEventListener("mouseout", mouseoutHjerte);

function mouseoutHjerte() {
  console.log("mouseoutHjerte");
  document.querySelector("#HotspothjerteBg").style.fill = "red";
}

/****click***/
document.querySelector("#Hotspothjerte").addEventListener("click", clickHjerte);

function clickHjerte() {
  console.log("clickHjerte");
  document.querySelector(".info-text h2").textContent = "5C strategi nr. 1:";
  document.querySelector(".info-text .placeholder").textContent = "SMIL TIL VERDEN & DEN SMILER TIL DIG!";
}

/******HOTSPOTTID*****/
/****mouseover***/
document.querySelector("#Hotspottid").addEventListener("mouseover", mouseoverTid);

function mouseoverTid() {
  console.log("mouseoverTid");

  animateBoxes();

  document.querySelector("#HotspottidBg").style.fill = "#50bfe2";
}

/****mouseout***/
document.querySelector("#Hotspottid").addEventListener("mouseout", mouseoutTid);

function mouseoutTid() {
  console.log("mouseoutTid");
  document.querySelector("#HotspottidBg").style.fill = "red";
}

/****click***/
document.querySelector("#Hotspottid").addEventListener("click", clickTid);

function clickTid() {
  console.log("clickTid");

  animateBoxes();

  document.querySelector(".info-text h2").textContent = "5C strategi nr. 2:";
  document.querySelector(".info-text .placeholder").textContent = "TIDSOPTIMISTEN - DET GÅR NOK! ";
}

/******HOTSPOTSKRIDT*****/
/****mouseover***/
document.querySelector("#Hotspotskridt").addEventListener("mouseover", mouseoverSkridt);

function mouseoverSkridt() {
  console.log("mouseoverSkridt");
  document.querySelector("#HotspotskridtBg").style.fill = "#50bfe2";
}

/****mouseout***/
document.querySelector("#Hotspotskridt").addEventListener("mouseout", mouseoutSkridt);

function mouseoutSkridt() {
  console.log("mouseoutSkridt");
  document.querySelector("#HotspotskridtBg").style.fill = "red";
}

/****click***/
document.querySelector("#Hotspotskridt").addEventListener("click", clickSkridt);

function clickSkridt() {
  console.log("clickSkridt");
  document.querySelector(".info-text h2").textContent = "5C strategi nr. 3:";
  document.querySelector(".info-text .placeholder").textContent = "JEG MÅ HELLERE HUSKE DAGENS SKRIDT!";
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector("#requirement").addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#efficiency").removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}

/****form handling*****/
const outputFornavn = document.querySelector(".fornavn_output");
const outputEfternavn = document.querySelector(".efternavn_output");
const outputKøn = document.querySelector(".køn_output");
const outputAlder = document.querySelector(".alder_output");
const outputTerms = document.querySelector("#terms_output");
