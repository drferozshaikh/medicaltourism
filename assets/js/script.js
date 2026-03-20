const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

let isOpen = false;

toggle.addEventListener("click", function (e) {
  e.stopPropagation();

  isOpen = !isOpen;

  if (isOpen) {
    menu.classList.add("active");
    toggle.innerHTML = "✖";
  } else {
    menu.classList.remove("active");
    toggle.innerHTML = "☰";
  }
});

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", function (e) {
  if (isOpen && !menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
    toggle.innerHTML = "☰";
    isOpen = false;
  }
});
