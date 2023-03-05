
var btn = document.getElementById("btn-home");
btn.addEventListener('click', show("home"));

btn = document.getElementById("btn-zawodnicy")
btn.addEventListener('click', show("zawodnicy"))

btn = document.getElementById("btn-stadion")
btn.addEventListener('click', show("stadion"))

btn = document.getElementById("btn-liga")
btn.addEventListener('click', show("liga"))

function show(zakladka) {
    var p = document.getElementsByClassName("section_home")

    for (let x of p) {
        x.style.display="none";
    }
    
    let section = document.getElementById(zakladka)
    section.style.display = "block";
}
