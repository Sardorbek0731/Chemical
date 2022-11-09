const send = document.getElementById("send");
const orderNow = document.getElementById("order-now");
const successfully = document.getElementById("successfully");
const close = document.getElementById("close");
const closeSuccessfully = document.getElementById("close-successfully");
const sendNext = document.getElementById("send-next");

send.addEventListener("click", (e) => {
  e.preventDefault();
  orderNow.classList.remove("none");
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  orderNow.classList.add("none");
});
sendNext.addEventListener("click", (e) => {
  e.preventDefault();
  orderNow.classList.add("none");
  successfully.classList.remove("none");
});
closeSuccessfully.addEventListener("click", (e) => {
  e.preventDefault();
  orderNow.classList.add("none");
  successfully.classList.add("none");
});