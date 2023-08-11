// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const mouse = document.getElementById("mouse");
  const rocket = document.getElementById("rocket");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    mouse.style.display = "none";
    header.classList.add("navbar-fixed");
    rocket.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    mouse.style.display = "block";
    rocket.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// active skills
const skillsContent = document
  .querySelector("#scrolling-content")
  .querySelectorAll("div");

skillsContent.forEach((element) => {
  element.addEventListener("click", function () {
    skillsContent.forEach((skil) => skil.classList.remove("activeSkills"));

    this.classList.add("activeSkills");

    if (this) {
      let target = document.querySelector(this.dataset.target);

      if (target) {
        target.style.display = "block";

        const allTargets = document.querySelectorAll(".targetSkills");
        allTargets.forEach((t) => {
          if (t !== target) {
            t.style.display = "none";
          }
        });
      }
    }
  });
});

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
let dark = document.getElementById("dark");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    dark.classList.remove('bi-moon-stars-fill')
    dark.classList.add('bi-brightness-high-fill')
    dark.style.color = 'white'
    html.classList.add("dark");
  } else {
    dark.classList.add('bi-moon-stars-fill')
    dark.classList.remove('bi-brightness-high-fill')
    dark.style.color = 'black'
    html.classList.remove("dark");
  }
});
