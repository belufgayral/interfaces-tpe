//1300 y
const cards = document.querySelectorAll(".sec3-card");

function fadeInCards(y) {
    //al no estar visibles, las cards vuelven a su setteo original.
    if (y < 1350) {
        for (let card of cards) {
            card.classList.add('no-visible');
            card.style.marginTop = "20px";
        }
    }

    //al estar visibles, las cards aparecen una a una conforme la velocidad que cambia
    //con cada iteración del for.
    if (y > 1350) {
        let speed = 0.2;

        for (let card of cards) {
            card.classList.remove('no-visible');
            card.style.marginTop = "0px";
            card.style.transition = "all "+ speed +"s ease-in-out";
            speed += 0.2;
        }
    }
}

export { fadeInCards };