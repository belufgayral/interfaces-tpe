const contenedores = document.querySelectorAll(".cards-container");

let clicks = 1;

contenedores.forEach(function (contenedor) {
    contenedor.addEventListener("click", changeCart);
})

function changeCart(event) {
    if (event.target.classList.contains("carrito")) {
        if (clicks === 1) {
            event.target.textContent = '¡Agregado al carrito!';
        } else {
            event.target.textContent = 'Agregar al carrito';
        }

        event.target.classList.add("shake-animation");

        setTimeout(() => {
            event.target.classList.remove("shake-animation");
        }, 350);
    }

    clicks = 1 - clicks;
}



// buttons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         if (clicks % 2 != 0) {
//             button.textContent = '¡Agregado al carrito!';
//             clicks++;
//         } else {
//             button.textContent = 'Agregar al carrito';
//             clicks++;
//         }
//     })
// });