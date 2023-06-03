// process auto next slide
const btnAutoNextSlide = document.querySelector(".btn-next-slide");

setInterval(() => {
  btnAutoNextSlide.click();
}, 3000);

// process auto count number

let countNumber1 = 0;
let countNumber2 = 0;
let countNumber3 = 0;
let isCounting1 = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= 387) {
    if (isCounting1 == false) {
      isCounting1 = true;
      const timeCount1 = this.setInterval(() => {
        const number1 = document.querySelector(".count-number-1");
        number1.textContent = countNumber1 + 1;
        countNumber1++;
        if (countNumber1 > 150) {
          clearInterval(timeCount1);
          countNumber1 = 0;
          isCounting1 = false;
        }
      }, 27);
    }
  }
});

let isCounting2 = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= 387) {
    if (isCounting2 == false) {
      isCounting2 = true;
      const timeCount2 = this.setInterval(() => {
        const number2 = document.querySelector(".count-number-2");
        number2.textContent = countNumber2 + 1;
        countNumber2++;
        if (countNumber2 > 989) {
          clearInterval(timeCount2);
          countNumber2 = 0;
          isCounting2 = false;
        }
      }, 3);
    }
  }
});

let isCounting3 = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= 387) {
    if (isCounting3 == false) {
      isCounting3 = true;
      const timeCount3 = this.setInterval(() => {
        const number3 = document.querySelector(".count-number-3");
        number3.textContent = countNumber3 + 1;
        countNumber3++;
        if (countNumber3 > 282) {
          clearInterval(timeCount3);
          countNumber3 = 0;
          isCounting3 = false;
        }
      }, 15);
    }
  }
});

// process category bottom to top
const category = document.querySelector(".category");
category.style.display = 'none'
const bottomTop = document.querySelectorAll(".bottom-top");
window.addEventListener("scroll", function () {
  // 1700
  if (this.window.scrollY > 1750 && document.documentElement.clientWidth > 1199) {
    category.style.display = 'flex'
    category.style.animation = "bottom-top-category ease .7s";
    bottomTop[0].style.animation = "bottom-top ease .7s";
    bottomTop[1].style.animation = "bottom-top ease .7s";
    bottomTop[2].style.animation = "bottom-top ease .7s";
    bottomTop[3].style.animation = "bottom-top ease .7s";
  }
});

// mobile
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 3100 && document.documentElement.clientWidth < 768) {
    category.style.display = 'flex'
    category.style.animation = "bottom-top-category ease .7s";
    bottomTop[0].style.animation = "bottom-top ease .7s";
    bottomTop[1].style.animation = "bottom-top ease .7s";
    bottomTop[2].style.animation = "bottom-top ease .7s";
    bottomTop[3].style.animation = "bottom-top ease .7s";
  }
});

// process bottom go top customer-card
const customerCard = document.querySelector(".customer-card");
window.addEventListener("scroll", function () {

  if (this.window.scrollY > 4454) {
    customerCard.style.animation = "card-bottom-top ease .5s";
    customerCard.style.display = 'block'
  }
});


 // process top down header light
 const headerLight = document.querySelector('.header-light')

 window.onscroll = function(){  
  if(window.scrollY > 70 && document.documentElement.clientWidth > 1199){
    headerLight.style.display = 'block'
  }
  else{
    headerLight.style.display = 'none'
  }
 }


 // process btn go top
 const btnGoTop = document.querySelector('.go-top-icon')
 btnGoTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
