const goblin = document.querySelector("#goblin");

function scrollGoblin(y) {
    // resetea la position:top del duende a la original.
    if (y < 188) {
        goblin.style.top = "-75px";
    }
    
    //mientras el duende está visible, modifica su position:top a menor velocidad que el scrolleo.
    if (y > 450 && y < 1600) {
        let top = (y - 1500) * 0.1;
        goblin.style.top = top + "px";
    }
}

export { scrollGoblin };