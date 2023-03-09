const btn1 = document.querySelector(".btn-home");
btn1.addEventListener("click", function () {
  show("home");
});

const btn2 = document.querySelector(".btn-zawodnicy");
btn2.addEventListener("click", function () {
  show("zawodnicy");
});

const btn3 = document.querySelector(".btn-stadion");
btn3.addEventListener("click", function () {
  show("stadion");
});

const btn4 = document.querySelector(".btn-liga");
btn4.addEventListener("click", function () {
  show("liga");
});

function show(sectionShow) {
  const sections = document.getElementsByClassName("section");

  for (const section of sections) {
    if (section.classList.contains("off")) {
      section.classList.remove("off");
    }
    section.classList.add("off");
  }

  const d = document.getElementById(sectionShow);
  d.classList.remove("off");
}
