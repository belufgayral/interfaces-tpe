import { renderGameCards } from "./home.js";

const background = document.querySelector("#background-loading");
const porcentaje = document.querySelector(".porcentaje");
const loader = document.querySelector(".loader");
const loadingBar = document.querySelector("#loading-bar");

const header = document.querySelector("#header-home");
const main = document.querySelector("#main-home");
const footer = document.querySelector("#footer-home");

let valor = 0;

function cargarPagina() {
  aumentarPorcentaje();

  setTimeout(() => {
    background.classList.add("display-none");
    porcentaje.classList.add("display-none");
    loader.classList.add("display-none");
    loadingBar.classList.add("display-none");

    header.classList.remove("display-none");
    main.classList.remove("display-none");
    footer.classList.remove("display-none");
    renderGameCards('Aventura');
    renderGameCards('Accion');
    renderGameCards('Terror');
    renderGameCards('Estrategia');
    renderGameCards('parati');
  }, 5500);
}

function aumentarPorcentaje() {
  if (valor < 100) {
    valor++;
    porcentaje.innerHTML = "<h1>" + valor + "%</h1>";
    setTimeout(aumentarPorcentaje, 50);
  }
}

cargarPagina();
