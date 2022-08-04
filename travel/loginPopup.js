let popup = document.querySelector(".popup");
let loginButton = document.querySelector(".loginbutton");
let opacityPopup = document.querySelector(".opacity-for-popup");
let input = document.querySelector("input[type='text']");
let input2 = document.querySelector("input[type='password']");

let registerLink = document.querySelector(".register-link");
let loginLink = document.querySelector(".login-link");

let signUpTitle = document.querySelector(".signup-popup-title");
let disappearingBlock = document.querySelector(".disappearing-block");
let signInButton = document.querySelector(".sign-in-button");
let signUpButton = document.querySelector(".sign-up-button");
let forgotPasswordLink = document.querySelector(".forgot-password-link");
let registerText = document.querySelector(".register-text");
let loginText = document.querySelector(".logintext-text");
let accountLink = document.querySelector(".account-link");

function displayPopup() {
    popup.classList.add("popup-active");
    opacityPopup.style.visibility = "visible"
}

function removePopup() {
    popup.classList.remove("popup-active");
    opacityPopup.style.visibility = "hidden"
}

function displayAlert() {
    alert("Sign In\nEmail: " + input.value + "\nPassword: " + input2.value);
}

function displayAlert2() {
  alert("Sign Up\nEmail: " + input.value + "\nPassword: " + input2.value);
}

function displayRegisterPopup(event) {
    event.preventDefault();
    signUpTitle.style.display = "block";
    disappearingBlock.style.display = "none";
    signInButton.style.display = "none";
    signUpButton.style.display = "block";
    forgotPasswordLink.style.display = "none";
    registerText.style.display = "none";
    loginText.style.display = "block";
}

function displayLoginPopup(event) {
  event.preventDefault();
  signUpTitle.style.display = "none";
  disappearingBlock.style.display = "flex";
  signInButton.style.display = "block";
  signUpButton.style.display = "none";
  forgotPasswordLink.style.display = "block";
  registerText.style.display = "block";
  loginText.style.display = "none";
}

loginButton.addEventListener("click", displayPopup);
opacityPopup.addEventListener("click", removePopup);
opacityPopup.addEventListener("click", displayLoginPopup);
signInButton.addEventListener("click", displayAlert);
signUpButton.addEventListener("click", displayAlert2);
registerLink.addEventListener("click", displayRegisterPopup);
loginLink.addEventListener("click", displayLoginPopup);
accountLink.addEventListener("click", displayPopup);


