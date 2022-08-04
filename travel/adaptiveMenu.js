let a = document.querySelector(".nav__showmenu");
let element = function () { return document.querySelector(".menu"); }
let shadow = function () { return document.querySelector(".nav_back"); }
let getMenu = function () { return element().classList.toggle("menu_active"); }
let applyShadow = function () { return shadow().classList.toggle("nav_back_opacity"); }

    a.onclick = function() {
      getMenu();
      applyShadow();
} // Menu is displayed upon clicking burger icon

let b = document.querySelector(".cross");

    b.onclick = function () {
      getMenu();
      applyShadow();
}; // Menu is closed upon clicking cross icon
    
let c = document.querySelector(".menu_list");
    c.onclick = function () {
      element().classList.remove("menu_active");
      shadow().classList.remove("nav_back_opacity");
}; // Menu is closed upon clicking anchor link

document.addEventListener("mousedown", function (e) {
  if (e.target.closest(".menu") === null) {
    element().classList.remove("menu_active");
    shadow().classList.remove("nav_back_opacity");
  }
}); // Menu is closed upon tapping outside it

