const burMenu = document.getElementById("bur-menu");
const overlay = document.getElementById("overlay");

function openNav() {
  burMenu.classList.remove("none");
  overlay.classList.remove("none");
}
function closeNav() {
  burMenu.classList.add("none");
  overlay.classList.add("none");
}
