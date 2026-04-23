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
  document.querySelector(".info-text h2").textContent = "5C strategi nr. 1";
  document.querySelector(".info-text .placeholder").textContent = "SMIL TIL VERDEN & DEN SMILER TIL DIG!";
  document.querySelector("#efficiency").innerHTML = "<h3>HVAD GØR DU?</h3><br><p>Du vælger den positive strategi. <br> Det er en god dag, hvor du udfordrer dig selv, siger PYT, trækker vejret dybt og går om bord på du rullende sardindåse 5C og tænker at du nok skal overleve turen på ca. 5 minutter.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>DINE HJÆLPESTRATEGIER:</h3><br><p>Du smiler til folk i bussen og benytter dine positive tanker som; <br> Det skal nok gå. <br>Det gik jo godt i går. <br> Hvad er det værste der kan ske? <br>Luk næsen og træk vejret igennem munden hvis du står for tæt på en af de modbydelige morgenlugte. <br>Nærkontakt med folk du ikke kender, kan også noget? <br>Jeg kan altid stå af ved næste stop, hvis det bliver for meget.<br>Er det i dag der skal deles gratis krammere ud til hele bussen?</p>";
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

  document.querySelector(".info-text h2").textContent = "5C strategi nr. 2";
  document.querySelector(".info-text .placeholder").textContent = "TIDSOPTIMISTEN - DET SKAL NOK GÅ! ";
  document.querySelector("#efficiency").innerHTML = "<h3>HVAD GØR DU?</h3><br><p>Du vælger 'Det skal nok gå-strategien. Det er ikke dagen hvor du bør udfordre dig selv og din klaustrofobi, som sild i en tønde i 5C. Du er sent på den alligevel, så om du kommer 5 minutter senere, det går jo nok. Den næste afgang med 5C kommer om få minutter og den er nok ikke lige så fyldt og så får du en meget bedre start på din dag.  </p>";
  document.querySelector("#requirement").innerHTML = "<h3>DINE HJÆLPESTRATEGIER:</h3><br><p>Du dropper den bus der er overfyldt og klapper dig selv på skulderen over at du lytter til dig selv. Nu kan du;<br>Trække vejret dybt og nyde den ’friske’ nørrebro luft. <br>Studere nogle af alle de spændende mennesker der færdes på Nørreport.<br>Nyde at du forhåbentlig lige om lidt kan få en plads i linje 5C som ikke er overfyldt og rent faktisk nyde turen.<br>Du har kun et liv, så det er med at gøre det så rart for dig selv som muligt. <p>";
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
  document.querySelector(".info-text h2").textContent = "5C strategi nr. 3";
  document.querySelector(".info-text .placeholder").textContent = "JEG MÅ HELLERE PRIORITERE AT FÅ DAGENS SKRIDT I BOGEN!";
  document.querySelector("#efficiency").innerHTML = "<h3>HVAD GØR DU?</h3><br><p>Du vælger ’Jeg skal huske mine 10.000 skidt-strategien</p>";
  document.querySelector("#requirement").innerHTML = "<h3>DINE HJÆLPESTRATEGIER:</h3><br><p>Tænk på følgende punkter på din gåtur; <br>Du har valgt at fokusere på din sundhed, hvilket er super vigtigt. <br>Det er godt for dig at få noget frisk luft til hjernen inden du skal ind og sidde på din pind i mange timer.<br> Din krop og dit sind er glad for dit valg.<br> Når nu du går forbi en god café på din vej, så har du fortjent at købe en to-go kaffe eller noget andet som premie.";
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
