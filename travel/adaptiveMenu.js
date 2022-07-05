let a = document.querySelector(".nav__showmenu");


    a.onclick = function() {
        let element = document.querySelector(".menu");
        let shadow = document.querySelector(".nav_back")
        element.classList.toggle("menu_active");
        shadow.classList.toggle("nav_back_opacity");
} // Menu is displayed upon clicking burger icon

let b = document.querySelector(".cross");

    b.onclick = function () {
      let element = document.querySelector(".menu");
      let shadow = document.querySelector(".nav_back");
      element.classList.toggle("menu_active");
      shadow.classList.toggle("nav_back_opacity");
}; // Menu is closed upon clicking cross icon
    
let c = document.querySelector(".menu_list");
    c.onclick = function () {
      let element = document.querySelector(".menu");
      let shadow = document.querySelector(".nav_back");
      element.classList.remove("menu_active"); 
      shadow.classList.remove("nav_back_opacity");
}; // Menu is closed upon scrolling

document.addEventListener("mousedown", function (e) {
  if (e.target.closest(".menu") === null) {
    let shadow = document.querySelector(".nav_back");
    let element = document.querySelector(".menu");
    element.classList.remove("menu_active");
    shadow.classList.remove("nav_back_opacity");
  }
}); // Menu is closed upon tapping outside it

