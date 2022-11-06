const send = document.getElementById("send");
const orderNow = document.getElementById("order-now");
const successfully = document.getElementById("successfully");
const close = document.getElementById("close");
const closeSuccessfully = document.getElementById("close-successfully");
const sendNext = document.getElementById("send-next");

send.addEventListener("click", () => {
  orderNow.classList.remove("none");
});

close.addEventListener("click", () => {
  orderNow.classList.add("none");
});
sendNext.addEventListener("click", () => {
  orderNow.classList.add("none");
  successfully.classList.remove("none");
});
closeSuccessfully.addEventListener("click", () => {
  orderNow.classList.add("none");
  successfully.classList.add("none");
});

window.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.querySelector(".burger_menu"),
    burMenu = document.querySelector(".burMenu"),
    close = document.querySelector(".close");

  burgerMenu.addEventListener("click", () => {
    burMenu.classList.remove("none");
  });
  close.addEventListener("click", () => {
    burMenu.classList.add("none");
  });

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop >= 180) {
      animClas.classList.add("opacityAnimation");
      animClas1.classList.add("opacityAnimation");
    }
  });
});
