var timeout;
var audio1 = new Audio("sound/toctoc.mp3");
var audio2 = new Audio("sound/door.mp3");
var audio3 = new Audio("sound/click.mp3");
var audio4 = new Audio("sound/awww.mp3");
var audio5 = new Audio("sound/cheers.mp3");
var audio6 = new Audio("sound/end.mp3");
let person;
var testoMessaggio = "";
fetch("messaggio.txt")
.then((res) => res.text())
.then((text) => {testoMessaggio = text;})


var introcontainer = document.getElementById("introcontainer");
var entratacontainer = document.getElementById("entratacontainer");
var entrataoptionscontainer = document.getElementById("entrataoptionscontainer");
var salacontainer = document.getElementById("salacontainer");
var biglietto = document.getElementById("biglietto");
var salaoptionscontainer = document.getElementById("salaoptionscontainer");
var btnLeggiBiglietto = document.getElementById("btnLeggiBiglietto");
var btnScappa2 = document.getElementById("btnScappa2");
var btnVaiInCamera = document.getElementById("btnVaiInCamera");
var cameraContainer = document.getElementById("cameracontainer");
var regalo = document.getElementById("regalo");

function tocToc(){
    audio1.play();
    timeout = setTimeout(start, 3000);
}

function start(){
    person = window.prompt("Chi sta bussando alla nostra porta?");
    clearTimeout(timeout);
    selectPerson();
}

function selectPerson(){
    if(person == "Greta" || person == "greta" || person == "Greti" || person == "greti" || person == "Gre" || person == "gre")
        enter();
    else if(person != null)
        window.alert("No grazie, non vogliamo niente! (vai via)");
    else
        window.alert("Ancora con questi scherzi da bambini!?!?");
}

function enter(){
    introcontainer.style.display = "none";
    entratacontainer.style.display = "block";
    audio2.play();
    timeout = setTimeout(welcome, 1200);
}

function welcome(){
    window.alert("Benvenuta amore, come stai?\nHo una sorpresa per te... vieni in sala");
    entrataoptionscontainer.style.display = "block";
    clearTimeout(timeout);
}

function scappa(){
    audio4.play();
    entrataoptionscontainer.style.display = "none";
    entratacontainer.style.display = "none";
    btnVaiInCamera.style.display = "none";
    biglietto.style.visibility = "hidden";
    btnLeggiBiglietto.style.display = "block";
    salaoptionscontainer.style.display = "none";
    salacontainer.style.display = "none";
    introcontainer.style.display = "block";
    timeout = setTimeout(fraseScappa, 50);
}

function fraseScappa(){
    window.alert("Amore dove vai??? :(");
    clearTimeout(timeout);
}

function vaiInSala(){
    audio3.play();
    entrataoptionscontainer.style.display = "none";
    entratacontainer.style.display = "none";
    salacontainer.style.display = "block";
    timeout = setTimeout(startGameSala, 200);
}

function startGameSala(){
    window.alert("Eccoti! Ti ho fatto una sorpresa.\nC'è un biglietto nascosto qui in sala, cercalo!");
    clearTimeout(timeout);
}

function mostraBiglietto(){
    biglietto.style.visibility = "visible";
    audio5.play();
    timeout = setTimeout(bigliettoTrovato, 3000);
}

function bigliettoTrovato(){
    window.alert("Complimenti amore!\nHai trovato il biglietto che ho nascosto, non ti resta che leggerlo :)");
    salaoptionscontainer.style.display = "block";
    clearTimeout(timeout);
}

function leggi(){
    audio3.play();
    biglietto.style.visibility = "hidden";
    salaoptionscontainer.style.display = "none";
    window.alert(testoMessaggio);
    timeout = setTimeout(fineLettura, 500);
}

function fineLettura(){
    window.alert("Amore, le sorsprese non sono finite...\nSeguimi in camera da letto");
    clearTimeout(timeout);
    btnLeggiBiglietto.style.display = "none";
    btnVaiInCamera.style.display = "block";
    salaoptionscontainer.style.display = "block";
}

function vaiInCamera(){
    audio3.play();
    btnLeggiBiglietto.style.display = "block";
    btnVaiInCamera.style.display = "none";
    salaoptionscontainer.style.display = "none";
    salacontainer.style.display = "none";
    cameracontainer.style.display = "block";
    timeout = setTimeout(startGameCamera, 200);
}

function startGameCamera(){
    window.alert("Come promesso le sorprese non sono finite...\nHo nascosto un altro regalino qui in camera, vediamo se lo trovi");
    clearTimeout(timeout);
}

function mostraRegalo(){
    regalo.style.visibility = "visible";
    audio5.play();
    timeout = setTimeout(regaloTrovato, 3000);
}

function regaloTrovato(){
    window.alert("Evviva, hai trovato anche il regalo!!!\nNon ti resta che scartarlo!");
    clearTimeout(timeout);
    audio6.play();
}