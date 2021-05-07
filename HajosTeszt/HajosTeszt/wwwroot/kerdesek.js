var kérdés;
var id = 1;
var joValasz;

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}


function kérdésMegjelenítés(kérdés) {

    document.getElementById("kérdés_szöveg").innerHTML = kérdés.questionText;
    document.getElementById("válasz1").innerHTML = kérdés.answer1;
    document.getElementById("válasz2").innerHTML = kérdés.answer2;
    document.getElementById("válasz3").innerHTML = kérdés.answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    joValasz = kérdés.correctAnswer;
}



function feher() {
    document.getElementById("válasz1").style.backgroundColor = "whitesmoke";
    document.getElementById("válasz2").style.backgroundColor = "whitesmoke";
    document.getElementById("válasz3").style.backgroundColor = "whitesmoke";
}

window.onload = function () {

    kérdésBetöltés(id);


    document.getElementById("vissza").onclick = () => {
        feher();
        id--;
        if (id == -1) return
        else {
            kérdésBetöltés(id);
        }

    }

    document.getElementById("elore").onclick = () => {
        feher();
        id++;
        kérdésBetöltés(id);
    }

    document.getElementById("válasz1").onclick = () => {
        if (joValasz == 1) {
            document.getElementById("válasz1").style.backgroundColor = "#00ff00"
        }
        else {
            document.getElementById("válasz1").style.backgroundColor = "#ff0000"
        }
    }

    document.getElementById("válasz2").onclick = () => {
        if (joValasz == 2) {
            document.getElementById("válasz2").style.backgroundColor = "#00ff00"
        }
        else {
            document.getElementById("válasz2").style.backgroundColor = "#ff0000"
        }
    }

    document.getElementById("válasz3").onclick = () => {
        if (joValasz == 3) {
            document.getElementById("válasz3").style.backgroundColor = "#00ff00"
        }
        else {
            document.getElementById("válasz3").style.backgroundColor = "#ff0000"
        }
    }
}



