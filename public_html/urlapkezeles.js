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
    var teloszamfilter = /0630+[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
    var weboldalfilter = /.*/;
    var prioritasfilter = /.*/;
    var uzenetfilterfilter = /.*/;
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
    }


    if (!emailfilter.test(ID("emailujra").value)) {
        hiba += "Nem ugyanaz a két email cím.";
        ID("emailujra").style.border = "3px solid red";
        if (emailfilter.test(ID("emailujra").value) === "") {
            hiba += "Üres.";
            ID("emailujra").style.border = "3px solid red";
        }
    } else {
        ID("emailujra").style.border = "none";
        if (!(ID("email")===ID("emailujra"))) {
            urlapadatok += "Email: " + ID("email").value + "<br>";
        }  
    }


    if (!teloszamfilter.test(ID("telefon").value)) {
        hiba += "A telefonszám csak számokból állhat és 0630-al kell kezdődnie.";
        ID("telefon").style.border = "3px solid red";
    } else {
        ID("telefon").style.border = "none";
        urlapadatok += "Telefonszám: " + ID("telefon").value + "<br>";
    }
   
    
    if (!weboldalfilter.test(ID("oldal").value)) {
        hiba += "A weboldal csak link lehet.";
        ID("oldal").style.border = "3px solid red";
    } else {
        ID("oldal").style.border = "none";
        urlapadatok += "Weboldal: " + ID("oldal").value + "<br>";
    }
    
    
    if (!prioritasfilter.test(ID("prio").value)) {
        hiba += "A weboldal csak link lehet.";
        ID("prio").style.border = "3px solid red";
    } else {
        ID("prio").style.border = "none";
        urlapadatok += "Priorítás: " + ID("prio").value + "<br>";
    }
    
    
    if (!uzenetfilterfilter.test(ID("uzi").value)) {
        hiba += "Bármi lehet.";
        ID("uzi").style.border = "3px solid red";
    } else {
        ID("uzi").style.border = "none";
        urlapadatok += "Üzenet: " + ID("uzi").value + "<br>";
    }

    console.log(hiba);
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = urlapadatok;
}
