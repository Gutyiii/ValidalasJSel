window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

function init() {
//    console.log("hahó");
    ID("kuld").addEventListener("click", validalas);
}

function validalas() {
//    console.log("validálás");
//    név beviteli ellenőrzés: nagybetűvel kezdődik?, 
//    vannak e benne szóközök?, 
//    betűt adott e meg?,
//    1 karakternél hosszabb legyen!
    var urlapadatok = "";
    var hiba = "";
    var filter = /[A-Z]+[a-z]{2,}/;
    var emailfilter = /[*a-z]+@+[*a-z]+.+[*a-z]/;
    if (!filter.test(ID("nev").value)) {
        hiba += "A név nagybetűvel kezdődjön és legalább három karakter legyen! \n\
                Legalább három karakter hosszú legyen a név!";
        ID("nev").style.border = "3px solid red";
    } else {
        ID("nev").style.border = "none";
        urlapadatok += "Név: " + ID("nev").value + "<br>";
    }

    if (!emailfilter.test(ID("email").value)) {
        hiba += "Az kisbetűvel kezdődjön, legyen benne kukac, következzen utána kisbetű, legyen egy pont és végül még néhány kisbetű.";
        ID("email").style.border = "3px solid red";
    } else {
        ID("email").style.border = "none";
        urlapadatok += "Email: " + ID("email").value + "<br>";
    }



    if (!emailfilter.test(ID("emailujra").value) === emailfilter.test(ID("email").value)) {
        hiba += "Nem ugyanaz a két email cím.";
        ID("emailujra").style.border = "3px solid red";
        if (emailfilter.test(ID("emailujra").value) === "") {
            hiba += "Üres.";
            ID("emailujra").style.border = "3px solid red";
        }
    } else {
        ID("emailujra").style.border = "none";
        urlapadatok += "Email űjra: " + ID("emailujra").value + "<br>";
    }

    console.log(hiba);
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = urlapadatok;
}
