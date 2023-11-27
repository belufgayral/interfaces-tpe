import { stickyHeader } from "./parallax-header.js";
import { parallaxMain } from "./parallax-section1.js";
import { scrollGoblin } from "./parallax-section2.js";
import { fadeInCards } from "./fade-in-section3.js";
import { scrollCards } from "./parallax-section4.js";

window.onscroll = function () {
    let y = window.scrollY;
    console.log(y);

    //función importada que manipula el comportamiento del header.
    stickyHeader(y);

    //función importada que manipula el parallax de la section-1.
    parallaxMain(y);

    //función importada que desplaza el duende de la section-2.
    scrollGoblin(y);

    //función importada que desplaza las cards de la section-3 desde abajo al ser visibles.
    fadeInCards(y);

    //función importada que desplaza las cards de la section-4 a destiempo.
    scrollCards(y);
}
