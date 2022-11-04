window.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.querySelector(".burger_menu"),
  burMenu = document.querySelector('.burMenu'),
  close = document.querySelector('.close')





  burgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    burMenu.classList.add('animActive')
    burMenu.classList.remove('closeMenu')
    burMenu.classList.remove('none')
  });

  close.addEventListener("click", function (e) {
    e.preventDefault();
    burMenu.classList.remove('animActive')
    burMenu.classList.add('closeMenu')
    setTimeout(() => {
        burMenu.classList.add('none')
    },400)
  });













});
