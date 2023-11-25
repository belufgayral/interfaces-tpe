const logo = document.querySelector("#logo");
const small_logo = document.querySelector("#small-logo");
const header = document.querySelector("#header");
const menuDesplegable = document.querySelector("#menu-desplegable");

function stickyHeader(y) {
     //manipulamos el logo.
     if (y < 100) {
        logo.classList.remove("logo-sticky");
        small_logo.classList.add("no-visible");
        
    }
    if (y > 100) {
        logo.classList.add("logo-sticky");
        small_logo.classList.remove("no-visible");
        
    }

    //manipulamos el z-index y el height del header.
    if (y < 105) {
        // header.classList.add("z-index-2");
        // header.classList.remove("z-index-10");
        header.style.height = "118px";
        menuDesplegable.style.top = "118px";
        // menuDesplegable.style.background = "rgba(84, 152, 247, 0.8)";
    }
    if (y > 105) {
        // header.classList.remove("z-index-2");
        // header.classList.add("z-index-10");
        header.style.height = "103px";
        menuDesplegable.style.top = "103px";
        // menuDesplegable.style.background = "linear-gradient(180deg, rgba(84, 153, 248, 0.0) 0%, rgba(84, 152, 247, 0.6) 5%, rgba(84, 152, 247, 1) 100%)";
    }
}

export { stickyHeader };