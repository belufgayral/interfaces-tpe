const hr1 = document.querySelector("#menu-hr1");
const hr2 = document.querySelector("#menu-hr2");
const hr3 = document.querySelector("#menu-hr3");

document.querySelector("#menu-hamburguesa").addEventListener("click", changeCross);

function changeCross() {
    hr1.classList.toggle('animation-rotate-positive');
    hr2.classList.toggle('animation-disappears');
    hr3.classList.toggle('animation-rotate-negative');
}