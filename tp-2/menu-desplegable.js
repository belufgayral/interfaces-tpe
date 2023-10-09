const profilePic = document.querySelector("#profile-pic");
const menuDesplegable = document.querySelector(".menu-desplegable");
const background = document.querySelector(".popup-background");
const arrow = document.querySelector("#arrow");
const cart = document.querySelector("#cart");

let contadorClicks = 0;

profilePic.addEventListener("click", showMenu);
profilePic.addEventListener("mouseenter", showArrow);
profilePic.addEventListener("mouseleave", hideArrow);

function showMenu() {
    contadorClicks++;
    arrow.classList.toggle("rotate");
    arrow.classList.toggle("no-rotate");
    menuDesplegable.classList.toggle("display-none");
    background.classList.toggle("display-none");
    console.log(contadorClicks);
}

function showArrow() {
    if (contadorClicks % 2 == 0 || contadorClicks == 0) {
        arrow.classList.remove("display-none");
        arrow.classList.add("translate-left-animation");

        setTimeout(() => {
            arrow.classList.remove("translate-left-animation");
        }, 1000);
    }
}

function hideArrow() {
    if (contadorClicks % 2 == 0) {
        arrow.classList.add("translate-right-animation");

        setTimeout(() => {
            arrow.classList.remove("translate-right-animation");
            arrow.classList.add("display-none");
        }, 900);
    }
}