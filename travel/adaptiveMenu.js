let a = document.querySelector(".nav__showmenu");


    a.onclick = function() {
        let element = document.querySelector(".menu");
        let shadow = document.querySelector(".wholepage")
        element.classList.toggle("menu_active");
        shadow.classList.toggle("shadow");
} // Menu is displayed upon clicking burger icon

let b = document.querySelector(".cross");

    b.onclick = function () {
      let element = document.querySelector(".menu");
      element.classList.toggle("menu_active");
    }; // Menu is closed upon clicking cross icon

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let element = document.querySelector(".menu");
  if (prevScrollpos < currentScrollPos) {
    element.classList.remove("menu_active");
  } 
  
}; // Menu is closed upon scrolling

document.addEventListener("mousedown", function (e) {
  if (e.target.closest(".menu") === null) {
    let element = document.querySelector(".menu");
    element.classList.remove("menu_active");
  }
}); // Menu is closed upon tapping outside it

