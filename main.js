window.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.querySelector(".burger_menu"),
  burMenu = document.querySelector('.burMenu'),
  close = document.querySelector('.close'),
  animClas = document.querySelector('.why_us_content1'),
  animClas1 = document.querySelector('.why_us_content2')


  burgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    burMenu.classList.add('animActive')
    burMenu.classList.remove('closeMenu')
    burMenu.classList.remove('burNone')
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
    },400);
  });
 
  window.addEventListener('scroll',() =>{
    let scrollTop = window.scrollY;
    if(scrollTop >= 180){
      animClas.classList.add('opacityAnimation'
      )
      animClas1.classList.add('opacityAnimation'
      )
    }
  })







});
