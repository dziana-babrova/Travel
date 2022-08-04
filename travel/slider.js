//desktop
let sliderRow = document.querySelector(".destinationsimagesv1");
let sliderNext = document.querySelectorAll(".destinationimagev1")[2];
let sliderCenter = document.querySelectorAll(".destinationimagev1")[1];  
let sliderPrev = document.querySelectorAll(".destinationimagev1")[0];
let dotForimage0 = document.querySelectorAll(".dotv1")[0];
let dotForimage1 = document.querySelectorAll(".dotv1")[1];
let dotForimage2 = document.querySelectorAll(".dotv1")[2];
  
function moveToNext() {
  sliderRow.classList.add("destinationsimages-next");
  dotForimage2.classList.add("dot-focusedv1");
  sliderRow.classList.remove("destinationsimages-prev");
  dotForimage1.classList.remove("dot-focusedv1");
  dotForimage0.classList.remove("dot-focusedv1");
}

function moveToPrev() {
  sliderRow.classList.add("destinationsimages-prev");
  sliderRow.classList.remove("destinationsimages-next");
  dotForimage0.classList.add("dot-focusedv1");
  dotForimage1.classList.remove("dot-focusedv1");
  dotForimage2.classList.remove("dot-focusedv1");
}

function moveToCenter() {
  sliderRow.classList.remove("destinationsimages-next");
  dotForimage2.classList.remove("dot-focusedv1");
  sliderRow.classList.remove("destinationsimages-prev");
  dotForimage0.classList.remove("dot-focusedv1");
  dotForimage1.classList.add("dot-focusedv1");
}

sliderNext.addEventListener('click', moveToNext);
dotForimage2.addEventListener("click", moveToNext);


sliderPrev.addEventListener("click", moveToPrev);
dotForimage0.addEventListener("click", moveToPrev);

sliderCenter.addEventListener("click", moveToCenter);
dotForimage1.addEventListener("click", moveToCenter);

//mobile
let mobileSliderNext = document.querySelector(".rightarrow");
let mobileSliderPrev = document.querySelector(".leftarrow");
let mobileSliderRow = document.querySelector(".destinationsimagesv2");
let dotForimage0v2 = document.querySelectorAll(".dotv2")[0];
let dotForimage1v2 = document.querySelectorAll(".dotv2")[1];
let dotForimage2v2 = document.querySelectorAll(".dotv2")[2];
let counter = 0;

function moveToNextMobile() {
  if (counter === 2) {
    mobileSliderRow.style.left = "-200.5%";
    mobileSliderNext.classList.add("arrows-filter");
    mobileSliderPrev.classList.remove("arrows-filter");
    dotForimage0v2.classList.remove("dot-focusedv2");
    dotForimage1v2.classList.remove("dot-focusedv2");
    dotForimage2v2.classList.add("dot-focusedv2");
  }
  if (counter === 1) {
    mobileSliderRow.style.left = "-200.5%";
    counter++;
    mobileSliderNext.classList.add("arrows-filter");
    mobileSliderPrev.classList.remove("arrows-filter");
    dotForimage0v2.classList.remove("dot-focusedv2");
    dotForimage1v2.classList.remove("dot-focusedv2");
    dotForimage2v2.classList.add("dot-focusedv2");
  }
  if (counter === 0) {
    mobileSliderRow.style.left = "-100.5%";
    counter++;
    mobileSliderNext.classList.remove("arrows-filter");
    mobileSliderPrev.classList.remove("arrows-filter");
    dotForimage0v2.classList.remove("dot-focusedv2");
    dotForimage1v2.classList.add("dot-focusedv2");
    dotForimage2v2.classList.remove("dot-focusedv2");
  }
}

function moveToPrevMobile() {
  if (counter === 0) {
    mobileSliderRow.style.left = "0";
    mobileSliderNext.classList.remove("arrows-filter");
    mobileSliderPrev.classList.add("arrows-filter");
    dotForimage0v2.classList.add("dot-focusedv2");
    dotForimage1v2.classList.remove("dot-focusedv2");
    dotForimage2v2.classList.remove("dot-focusedv2");
  }
  if (counter === 1) {
    mobileSliderRow.style.left = "0";
    counter--;
    mobileSliderNext.classList.remove("arrows-filter");
    mobileSliderPrev.classList.add("arrows-filter");
    dotForimage0v2.classList.add("dot-focusedv2");
    dotForimage1v2.classList.remove("dot-focusedv2");
    dotForimage2v2.classList.remove("dot-focusedv2");
  }
  if (counter === 2) {
    mobileSliderRow.style.left = "-100.5%";
    counter--;
    mobileSliderNext.classList.remove("arrows-filter");
    mobileSliderPrev.classList.remove("arrows-filter");
    dotForimage0v2.classList.remove("dot-focusedv2");
    dotForimage1v2.classList.add("dot-focusedv2");
    dotForimage2v2.classList.remove("dot-focusedv2");
  }
}

mobileSliderNext.addEventListener("click", moveToNextMobile);


mobileSliderPrev.addEventListener("click", moveToPrevMobile);
