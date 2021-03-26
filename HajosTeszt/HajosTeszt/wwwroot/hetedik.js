var kérdések;
var kérdésSzám = 0;

function letöltés() {

    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {

    console.log("Sikeres letöltés");
    console.log(d);
    kérdések = d;
    kérdésMegjelenítés(kérdésSzám);
}

function kérdésMegjelenítés(kérdés) {

    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
}

function feher() {
    document.getElementById("válasz1").style.backgroundColor = "whitesmoke";
    document.getElementById("válasz2").style.backgroundColor = "whitesmoke";
    document.getElementById("válasz3").style.backgroundColor = "whitesmoke";
}

window.onload = function () {

    letöltés();


    document.getElementById("vissza").onclick = () => {
        feher();
        kérdésSzám--;
        if (kérdésSzám == -1) {
            kérdésSzám = kérdések.length - 1;
            kérdésMegjelenítés(kérdésSzám);

        }
        else {
            kérdésMegjelenítés(kérdésSzám);
        }

    }

    document.getElementById("elore").onclick = () => {
        kérdésSzám++;
        if (kérdésSzám == kérdések.length) {
            kérdésSzám = 0;
            kérdésMegjelenítés(kérdésSzám);

        }
        else {
            kérdésMegjelenítés(kérdésSzám);
        }
        feher();
    }

    document.getElementById("válasz1").onclick = () => {
        if (kérdések[kérdésSzám].correctAnswer == 1) {
            document.getElementById("válasz1").style.backgroundColor = "#00ff00"
        }
        else {
            document.getElementById("válasz1").style.backgroundColor = "#ff0000"
        }
    }

    document.getElementById("válasz2").onclick = () => {
        if (kérdések[kérdésSzám].correctAnswer == 2) {
            document.getElementById("válasz2").style.backgroundColor = "#00ff00"
        }
        else {
            document.getElementById("válasz2").style.backgroundColor = "#ff0000"
        }
    }

    document.getElementById("válasz3").onclick = () => {
        if (kérdések[kérdésSzám].correctAnswer == 3) {
            document.getElementById("válasz3").style.backgroundColor = "#00ff00"
        }
        else {
            document.getElementById("válasz3").style.backgroundColor = "#ff0000"
        }
    }
}



