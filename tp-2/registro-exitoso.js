import { fueClickeado, captchaError } from "./recaptcha.js";

const registrationPopup = document.querySelector(".registration-popup");
const dot1 = document.querySelector("#dot-1");
const dot2 = document.querySelector("#dot-2");
const dot3 = document.querySelector("#dot-3");
const popupBackground = document.querySelector(".popup-background");

document.querySelector("#registration-btn").addEventListener("click", changeToHome);

function changeToHome() {
    if (fueClickeado) {
        registrationPopup.classList.remove("display-none");
        popupBackground.classList.remove("display-none");

        setTimeout(() => {
            dot1.classList.remove("display-none");
            dot1.classList.add("dot-animation");
        }, 1300);

        setTimeout(() => {
            dot2.classList.remove("display-none");
            dot2.classList.add("dot-animation");
        }, 2300);

        setTimeout(() => {
            dot3.classList.remove("display-none");
            dot3.classList.add("dot-animation");
        }, 3300);

        setTimeout(() => {
            window.location.href = "home.html";
        }, 4500);
    } else {
        console.log("entró al else");
        captchaError();
    }
}