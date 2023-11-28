const loadingPage = document.querySelector("#loading-page");
const porcentaje = document.querySelector(".porcentaje");
const loadingBar = document.querySelector("#loading-bar");
const main = document.querySelector("#main");
const spiderWeb = document.querySelector("#spider-web");

let valor = 0;

function cargarPagina() {
    console.log("entra a cargar pagina");
    aumentarPorcentaje();

    setTimeout(() => {
        loadingPage.classList.add("display-none");
        main.classList.remove("display-none");
    }, 5800);
}

function aumentarPorcentaje() {
    if (valor < 100) {
      valor++;
      porcentaje.innerHTML = valor + "%";
      setTimeout(aumentarPorcentaje, 50);
    }
  }

  cargarPagina();