const character1 = document.querySelector("#character1");
const character2 = document.querySelector("#character2");
const character3 = document.querySelector("#character3");

const spiderweb1 = document.querySelector("#spiderweb1");
const spiderweb2 = document.querySelector("#spiderweb2");

const bg1 = document.querySelector("#bg1");
const bg2 = document.querySelector("#bg2");
const bg3 = document.querySelector("#bg3");

function parallaxMain(y) {
    //if de control para modificar los elementos sólo en tanto sean visibles.
    if (y < 988) {
        //se captura el scroll y se lo divide para obtener un número pequeño.
        let topY = y / 15;

        //se modifica la position:top de los personajes acorde a sus posiciones originales para un movimiento suave.
        character1.style.top = topY + 53 + "px";
        character2.style.top = topY + 68 + "px";
        character3.style.top = topY + "px";

        //se modifica la position:top de las telas de araña con la misma proporción que el movimiento de los personajes.
        spiderweb1.style.top = topY + 249 + "px";
        spiderweb2.style.top = topY + 262 + "px";

        //se escalan los edificios del background para que crezcan y decrezcan suavemente con el scroll. 
        bg1.style.transform = "scale(" + (1 + topY / 200) + ")";
        bg2.style.transform = "scale(" + (1 + topY / 200) + ")";
        bg3.style.transform = "scale(" + (1 + topY / 200) + ")";
    }
}

export { parallaxMain };