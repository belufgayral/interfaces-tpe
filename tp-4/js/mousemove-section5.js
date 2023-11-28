const divVeng = document.querySelector("#section5");
const char1 = divVeng.querySelector("#char1");
const char2 = divVeng.querySelector("#char2");
const char3 = divVeng.querySelector("#char3");

function avengersAnimation(e) {
    
    const offset1 = { // char1
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 16),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + window.scrollY)) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 16)
    };
    const offset2 = { // char2
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 8),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + window.scrollY)) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 8)
    };
    const offset3 = { //char3
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 6),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + window.scrollY)) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 6)
    };

    char1.style.transform = `rotate(16deg) translate(${-offset1.x}px, ${-offset1.y}px)`;
    char2.style.transform = `translate( ${-offset2.x}px, ${-offset2.y}px)`;
    char3.style.transform = `translate( ${-offset3.x}px, ${-offset3.y}px)`;
}

divVeng.addEventListener("mousemove", avengersAnimation)