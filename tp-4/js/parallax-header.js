const logo = document.querySelector("#logo");
const small_logo = document.querySelector("#small-logo");
const header = document.querySelector("#header");

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
    if (y < 200) {
        header.classList.add("z-index-2");
        header.classList.remove("z-index-10");
        header.style.height = "118px";
    }
    if (y > 200) {
        header.classList.remove("z-index-2");
        header.classList.add("z-index-10");
        header.style.height = "103px";
    }
}

export { stickyHeader };