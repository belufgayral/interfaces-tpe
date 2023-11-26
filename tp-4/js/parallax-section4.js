const cards = document.querySelectorAll(".sec4-card");

function scrollCards(y) {
    //if de control para resetear el transform a su estado original.
    if (y < 1700) {
        for (let card of cards) {
            card.style.transform = "translateY(85px) rotate(0deg)";

        }
    }

    //if de control para generar el desplazamiento a destiempo mientras las cards están visibles.
    if (y > 1700 && y < 2300) {
        let pos = y / 20;

        for (let card of cards) {
            //eventos de hover para manipular la perspectiva de las cards.
            card.addEventListener("mouseenter", () => {
                card.style.transform = "translateY("+pos+"px) rotate(13deg)";
                console.log("mouse enter");
            })
            card.addEventListener("mouseleave", () => {
                card.style.transform = "translateY("+pos+"px) rotate(0deg)";
                console.log("mouse leave");
            })
            card.style.transform = "translateY("+pos+"px) rotate(0deg)";
        }
    }
}

export { scrollCards };