const captchaBox = document.querySelector(".captchaBox");
const captchaWrapper = document.querySelector(".captchaWrapper");
const captchaTick = document.querySelector(".captchaTick");
const captchaContainer = document.querySelector(".captchaContainer");

let fueClickeado = false;

captchaBox.addEventListener("click", changeState);

function changeState() {
    fueClickeado = true;

    captchaBox.classList.add("captcha-animation");

    setTimeout(() => {
        captchaBox.classList.remove("boxHover");
        captchaBox.classList.add("circle");
        captchaWrapper.classList.add("rotation-animation");
    }, 1000);
    setTimeout(() => {
        captchaBox.classList.remove("circle");
        captchaBox.classList.add("display-none");
        captchaWrapper.classList.remove("rotation-animation");
        captchaTick.classList.remove("display-none");
        captchaTick.classList.add("tick-animation");
    }, 3500);
}

function captchaError() {
    captchaContainer.classList.add("captcha-error");
    setTimeout(() => {
        captchaContainer.classList.remove("captcha-error");
    }, 1000);
}

export { fueClickeado, captchaError };