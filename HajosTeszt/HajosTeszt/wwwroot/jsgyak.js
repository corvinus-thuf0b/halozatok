window.onload = function () {

    console.log("Betöltődött.");

    let hova = document.getElementById("ide");
    for (var i = 1; i < 11; i++) {
        let uj = document.createElement("div");
        uj.innerText = i;
        uj.style.backgroundColor = `rgb(0,${255 / i},${255 / i})`
        hova.appendChild(uj);
    }

    var fakt = function (n) {
        let er = 1;
        for (var i = 1; i <= n; i++) {
            er = er * i;
        }
        return er;
    }

    for (var i = 0; i < 10; i++) {
        let ujsor = document.createElement("div");
        ujsor.classList.add("sor")
        document.getElementById("pascal").appendChild(ujsor);

        for (var j = 0; j < i+1; j++) {
            let ujszam = document.createElement("div");
            ujsor.appendChild(ujszam);
            ujszam.classList.add("szam");
            ujszam.innerText = fakt(i) / (fakt(j) * fakt(i - j));


        }
    }

}



