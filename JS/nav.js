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

// Dropdown
const dropdownContent = document.getElementById("dropdown-content");

function openDrop() {
  dropdownContent.classList.toggle("none");
  dropdownContent.classList.toggle("flex");

  setTimeout(() => {
    dropdownContent.classList.add("none");
    dropdownContent.classList.remove("flex");
  }, 4000);
}
