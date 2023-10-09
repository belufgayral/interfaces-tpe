const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", changeHome);

function changeHome() {
    window.location.href = "index.html";
}