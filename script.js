
// SECTIONOBSERVER

const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".intersection");


const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add("nav-scrolled")
        } else {
            nav.classList.remove("nav-scrolled")
        }
    });
});

sectionOneObserver.observe(sectionOne)

//PUN

const link = document.getElementById("pun");

link.addEventListener("click", (e) => {
  link.textContent = link.textContent === "Resume" ? "Pause" : "Resume";
});