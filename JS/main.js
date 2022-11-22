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

        <div class="products_btn flex align_center justify_between">
            <button class="btn btn_products">
                <a href="./products.html">Products</a>
            </button>

            <div class="slider_btn_banner">
                <button class="btn left_arr left_arr_banner" onclick="leftSlider()">
                    <img src="./images/icons/allow_right.png" alt="<" />
                </button>

                <button class="btn right_arr right_arr_banner" onclick="rightSlider()" >
                    <img src="./images/icons/allow_right.png" alt=">" />
                </button>

            </div>
        </div>
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
    bannerAnimate.style.transform = `translate(-${count * 317}px)`;
  } else {
    bannerAnimate.style.transform = `translate(-${count * 34.875}rem)`;
  }
}

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

function leftClientSlider() {
  clientIndex--;
  clientSlider();
}
function rightClientSlider() {
  clientIndex++;
  clientSlider();
}