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
        header.style.height = "118px";
        menuDesplegable.style.top = "118px";
    }
    if (y > 105) {
        header.style.height = "103px";
        menuDesplegable.style.top = "103px";
    }
}

export { stickyHeader };