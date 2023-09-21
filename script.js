function letrehoz() {
    var divSakkTabla = document.getElementById("divSakkTabla");
    var mezokSzama = document.getElementById("sliMezokSzama").value;
    var mezokMerete = document.getElementById("sliMezokMerete").value;
    var meret = mezokMerete + "px";

    while (divSakkTabla.firstChild) {
        divSakkTabla.removeChild(divSakkTabla.lastChild);
    }

    for (let sorindex = 0; sorindex != mezokSzama; sorindex++) {
        var sor = document.createElement("div");
        sor.id = "divSor";
        sor.style.maxHeight = meret;
        for (let index = 0; index != mezokSzama; index++) {
            var elem = document.createElement("div");
            elem.style.width = meret;
            elem.style.height = meret;
            if (sorindex % 2 != 0) {
                if (index % 2 == 0) {
                    elem.className = "piros";
                }
                else {
                    elem.className = "zold";
                }
            }
            else {
                if (index % 2 != 0) {
                    elem.className = "piros";
                }
                else {
                    elem.className = "zold";
                }
            }
            sor.appendChild(elem);
        }
        divSakkTabla.appendChild(sor);
    }
}

letrehoz();