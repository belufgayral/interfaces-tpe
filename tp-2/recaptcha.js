let captchaBox = document.querySelector(".captchaBox");
let captchaWrapper = document.querySelector(".captchaWrapper");
let captchaTick = document.querySelector(".captchaTick");

captchaBox.addEventListener("click", changeState);

function changeState() {
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