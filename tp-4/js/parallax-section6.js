const container = document.querySelector(".container");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");

container.onscroll = function () {
    let y = container.scrollTop;
    console.log(y);

    if (y < 320) {
        card1.classList.remove("no-visible");
        card2.classList.add("no-visible");
        card3.classList.add("no-visible");
        card4.classList.add("no-visible");
    }
    if (y > 320) {
        card1.classList.add("no-visible");
        card2.classList.remove("no-visible");
        card3.classList.add("no-visible");
        card4.classList.add("no-visible");
    }
    if (y > 700) {
        card1.classList.add("no-visible");
        card2.classList.add("no-visible");
        card3.classList.remove("no-visible");
        card4.classList.add("no-visible");
    }
    if (y > 1100) {
        card1.classList.add("no-visible");
        card2.classList.add("no-visible");
        card3.classList.add("no-visible");
        card4.classList.remove("no-visible");
    }
};