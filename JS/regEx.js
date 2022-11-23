// regEx
let regEX = /[a-zA-Z0-9]{2,}@/;
let regExNumber = /^[+][0-9]{2,}$/;
let regExName = /^[a-zA-Z]{2,24}$/;
const email = document.querySelectorAll("#email");
const number = document.querySelectorAll("#number");
const ism = document.querySelectorAll("#name");

function regExFunc(id, type) {
  if (type.test(id.value)) {
    id.style.border = "1px solid green";
    return true;
  } else {
    id.style.border = "1px solid red";
    return false;
  }
}

let isTrue1 = false;
let isTrue2 = false;
let isTrue3 = false;

email.forEach((item) => {
  item.addEventListener("keyup", () => {
    isTrue1 = regExFunc(item, regEX);
  });
});

ism.forEach((item) => {
  item.addEventListener("keyup", () => {
    isTrue2 = regExFunc(item, regExName);
  });
});

number.forEach((item) => {
  item.addEventListener("keyup", () => {
    isTrue3 = regExFunc(item, regExNumber);
  });
});
