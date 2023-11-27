const container = document.querySelector(".container");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");

const text1 = document.querySelector("#text-1");
const text2 = document.querySelector("#text-2");
const text3 = document.querySelector("#text-3");
const text4 = document.querySelector("#text-4");

container.onscroll = function () {
    let y = container.scrollTop;
    // console.log(y);

    //Movimiento scrolling de las imágenes
    if (y < 240) {
        card1.classList.remove("no-visible");
        card2.classList.add("no-visible");
        card3.classList.add("no-visible");
        card4.classList.add("no-visible");
    }
    if (y > 240) {
        card1.classList.add("no-visible");
        card2.classList.remove("no-visible");
        card3.classList.add("no-visible");
        card4.classList.add("no-visible");
    }
    if (y > 540) {
        card1.classList.add("no-visible");
        card2.classList.add("no-visible");
        card3.classList.remove("no-visible");
        card4.classList.add("no-visible");
    }
    if (y > 1000) {
        card1.classList.add("no-visible");
        card2.classList.add("no-visible");
        card3.classList.add("no-visible");
        card4.classList.remove("no-visible");
    }

    //Movimiento scrolling de los textos
    if (y < 200) {
        text1.classList.remove("no-visible");
        text2.classList.add("no-visible");
        text3.classList.add("no-visible");
        text4.classList.add("no-visible");
    }
    if (y > 200) {
        text1.classList.add("no-visible");
        text2.classList.remove("no-visible");
        text3.classList.add("no-visible");
        text4.classList.add("no-visible");
    }
    if (y > 520) {
        text1.classList.add("no-visible");
        text2.classList.add("no-visible");
        text3.classList.remove("no-visible");
        text4.classList.add("no-visible");
    }
    if (y > 960) {
        text1.classList.add("no-visible");
        text2.classList.add("no-visible");
        text3.classList.add("no-visible");
        text4.classList.remove("no-visible");
    }
};