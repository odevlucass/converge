let mobileMenu = document.getElementById("mobileMenu");
let menu = document.getElementById("menu");

function abrirMenuMobile() {
    menu.classList.toggle("active");
}

mobileMenu.addEventListener('click', abrirMenuMobile);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.2 
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});