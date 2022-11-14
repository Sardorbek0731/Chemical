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

// regEx

let regEX = /[a-zA-Z0-9]{2,}@/;
let regExNumber = /^[0-9]{2,}$/;
let regExName = /^[a-zA-Z]{2,24}$/;

const email = document.querySelectorAll("#email");
const number = document.querySelectorAll("#number");
const ism = document.querySelectorAll("#name");

function regExFunc(id, type) {
  if (type.test(id.value)) {
    id.style.border = "1px solid green";
  } else {
    id.style.border = "1px solid red";
  }
}

email.forEach((item) => {
  item.addEventListener("keyup", () => {
    regExFunc(item, regEX);
  });
});

ism.forEach((item) => {
  item.addEventListener("keyup", () => {
    regExFunc(item, regExName);
  });
});

number.forEach((item) => {
  item.addEventListener("keyup", () => {
    regExFunc(item, regExNumber);
  });
});

// Slider

const bannerAnimate = document.getElementById("banner-animate");

function rightSlider() {
  bannerAnimate.style.transform = "translate(-50%)";
}

function leftSlider() {
  bannerAnimate.style.transform = "translate(0)";
}

// Building Materials
const buldingAnim = document.getElementById("bulding-anim");

let buildingNames = [
  "Pure cellulose pulp, long fibre",
  "Pure cellulose pulp, long fibre",
  "Pure cellulose pulp, long fibre",
  "Pure cellulose pulp, long fibre",
  "Pure cellulose pulp, long fibre",
  "Pure cellulose pulp, long fibre",
];
let buildingImages = [
  "sement",
  "sement",
  "sement",
  "sement",
  "sement",
  "sement",
];
let buildingText = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
];

buildingNames.forEach((item, i) => {
  buldingAnim.innerHTML += `
    <div class="material">
        <div class="mimg">
            <img src="../Images/${buildingImages[i]}.png" alt="material" />
        </div>
  
        <h1>${item}</h1>
  
        <p>
            ${buildingText[i]}
        </p>
  
        <a href="../Assets/buildingData.html">
            View more 
            <img src="../Images/bluearight.png" alt=">"/>
        </a>
    </div>
  `;
});

// Build slider
const material = document.getElementsByClassName("material");
let index = 0;

function sliderFunc() {
  if (window.screen.width <= 560) {
    if (index >= 6) {
      index = 0;
    } else if (index < 0) {
      index = 5;
    }

    buldingAnim.style.transform = `translate(-${index * 16.66666}%)`;
  } else {
    if (index >= 2) {
      index = 0;
    } else if (index < 0) {
      index = 1;
    }
    buldingAnim.style.transform = `translate(-${index * 50}%)`;
  }
}

function rightSlideBuild() {
  index++;
  sliderFunc();
}

function leftSlideBuild() {
  index--;
  sliderFunc();
}
