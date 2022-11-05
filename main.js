window.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.querySelector(".burger_menu"),
  burMenu = document.querySelector('.burMenu'),
  close = document.querySelector('.close')





  burgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    burMenu.classList.add('animActive')
    burMenu.classList.remove('closeMenu')
    burMenu.classList.remove('none')
    setTimeout(() =>{
      document.querySelector('.ul').classList.remove('none')
    },300)
  });

  close.addEventListener("click", function (e) {
    e.preventDefault();
    burMenu.classList.remove('animActive')
    burMenu.classList.add('closeMenu')
    document.querySelector('.ul').classList.add('none')
    setTimeout(() => {
        burMenu.classList.add('none')
    },400)
  });













});
