const send = document.getElementById("send");
const successfully = document.getElementById("successfully");
const close = document.getElementById("close");
const closeSuccessfully = document.getElementById("close-successfully");
const sendNext = document.getElementById("send-next");

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (isTrue1 && isTrue2 && isTrue3) {
    successfully.classList.remove("none");
  }
});

closeSuccessfully.addEventListener("click", (e) => {
  e.preventDefault();
  successfully.classList.add("none");
});

// Slider

const bannerAnimate = document.getElementById("banner-animate");
const bannerImg = document.getElementById("banner-img");
let count = 0;

const changeTitle = [
  "Lorem <span class='ublue'>Ipsum </span> is simply dummy text of the",
  "Lorem <span class='ublue'>Ipsum </span> is simply dummy text of the 1",
  "Lorem <span class='ublue'>Ipsum </span> is simply dummy text of the 2",
];

changeTitle.forEach((item) => {
  bannerAnimate.innerHTML += `
    <div class="products_change flex justify_evenly align_center">
        <h1 class="prodtitle">
            ${item}
        </h1>

        <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum
        </p>
    </div>
  `;
});

function changeSlider() {
  if (count >= changeTitle.length) {
    count = 0;
  } else if (count < 0) {
    count = changeTitle.length - 1;
  }

  if (window.screen.width <= 480) {
    bannerAnimate.style.transform = `translate(-${count * 311}px)`;

    bannerImg.innerHTML = `
    <img src="./images/header_person${count}.png" alt="Person" class="bimgper" />
    `;
  } else {
    bannerImg.innerHTML = `
    <img src="./images/header_person${count}.png" alt="Person" class="bimgper" />
    `;
    bannerAnimate.style.transform = `translate(-${count * 34.875}rem)`;
  }
}

setInterval(() => {
  rightSlider();
}, 3000);

function leftSlider() {
  count--;
  changeSlider();
}
function rightSlider() {
  count++;
  changeSlider();
}

// Clients
const clientImages = document.getElementById("client-images");
const images = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let clientIndex = 0;

images.forEach((item) => {
  clientImages.innerHTML += `
      <img src="./images/logoIPsum${item}.png" alt="logoIPsum" />
  `;
});

function clientSlider() {
  if (clientIndex >= images.length) {
    clientIndex = 0;
  } else if (clientIndex < 0) {
    clientIndex = images.length - 1;
  }

  clientImages.style.transform = `translate(-${clientIndex * 100}%)`;
}

if (window.screen.width <= 480) {
  setInterval(() => {
    rightClientSlider();
  }, 1500);
}

function leftClientSlider() {
  clientIndex--;
  clientSlider();
}
function rightClientSlider() {
  clientIndex++;
  clientSlider();
}
