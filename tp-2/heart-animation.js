document.querySelector("#heart").addEventListener("click", changeState);

function changeState() {
    document.querySelector("#heart").classList.toggle("red");
    document.querySelector("#heart").classList.add("heart-animation");

    setTimeout(() => {
        document.querySelector("#heart").classList.remove("heart-animation");
    }, 1000);
}