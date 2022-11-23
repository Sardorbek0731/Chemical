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
  if (window.screen.width <= 480) {
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

const pricing = document.getElementById("pricing");
const orderNow = document.getElementById("order-now");
const successfully = document.getElementById("successfully");
const closeOrder = document.getElementById("close");
const closeSuccessfully = document.getElementById("close-successfully");
const sendNext = document.getElementById("send-next");

pricing.addEventListener("click", (e) => {
  e.preventDefault();
  orderNow.classList.remove("none");
});

closeOrder.addEventListener("click", (e) => {
  e.preventDefault();
  orderNow.classList.add("none");
});

sendNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (isTrue1 && isTrue2 && isTrue3) {
    successfully.classList.remove("none");
    orderNow.classList.add("none");
  }
});

closeSuccessfully.addEventListener("click", (e) => {
  e.preventDefault();
  successfully.classList.add("none");
});
