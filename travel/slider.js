let sliderRow = document.querySelector(".destinationsimages"); /* находим на странице по селектору */
let sliderNext = document.querySelectorAll(".destinationimage")[2]; /* находим кнопку Next по селектору */
let sliderCenter = document.querySelectorAll(".destinationimage")[1];  
let sliderPrev = document.querySelectorAll(".destinationimage")[0];
let dotForimage0 = document.querySelectorAll(".dot")[0];
let dotForimage1 = document.querySelectorAll(".dot")[1];
let dotForimage2 = document.querySelectorAll(".dot")[2];
/* находим кнопку Prev по селектору */
  
function moveToNext() {
  sliderRow.classList.add("destinationsimages-next");
  dotForimage2.classList.add("dot-focused");
  sliderRow.classList.remove("destinationsimages-prev");
  dotForimage1.classList.remove("dot-focused");
  dotForimage0.classList.remove("dot-focused");
}

function moveToPrev() {
  sliderRow.classList.add("destinationsimages-prev");
  sliderRow.classList.remove("destinationsimages-next");
  dotForimage0.classList.add("dot-focused");
  dotForimage1.classList.remove("dot-focused");
  dotForimage2.classList.remove("dot-focused");
}

function moveToCenter() {
  sliderRow.classList.remove("destinationsimages-next");
  dotForimage2.classList.remove("dot-focused");
  sliderRow.classList.remove("destinationsimages-prev");
  dotForimage0.classList.remove("dot-focused");
  dotForimage1.classList.add("dot-focused");
}

sliderNext.addEventListener('click', moveToNext);
dotForimage2.addEventListener("click", moveToNext);


sliderPrev.addEventListener("click", moveToPrev);
dotForimage0.addEventListener("click", moveToPrev);

sliderCenter.addEventListener("click", moveToCenter);
dotForimage1.addEventListener("click", moveToCenter);

