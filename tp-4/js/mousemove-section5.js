const divVeng = document.querySelector("#section5");
const char1 = divVeng.querySelector("#char1");
const char2 = divVeng.querySelector("#char2");
const char3 = divVeng.querySelector("#char3");
const bg1 = divVeng.querySelector("#bg1");
const bg2 = divVeng.querySelector("#bg2");

function getScrollPosition() {
    return window.scrollY;
}

function avengersAnimation(e) {
    
    const offset1 = { // black panther
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 16),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + getScrollPosition())) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 16)
    };
    const offset2 = { // ms. marvel
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 8),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + getScrollPosition())) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 8)
    };
    const offset3 = { //char3
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 6),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + getScrollPosition())) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 6)
    };
    /* const offset4 = { // bg1
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 4),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + getScrollPosition())) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 4)
    };
    const offset5 = { // bg2
        x: (e.pageX - divVeng.clientWidth / 2) / (divVeng.clientWidth / 20),
        y: ((e.pageY - (divVeng.getBoundingClientRect().y + getScrollPosition())) - divVeng.clientHeight / 2) / (divVeng.clientHeight / 20)
    }; */


    char1.style.transform = `rotate(16deg) translate(${-offset1.x}px, ${-offset1.y}px)`;
    char2.style.transform = `translate( ${-offset2.x}px, ${-offset2.y}px)`;
    char3.style.transform = `translate( ${-offset3.x}px, ${-offset3.y}px)`;

   /*  bg1.style.transform = `translate(calc(${-offset4.x}px - 50%), calc(${-offset4.y}px - 50%))`;
    bg2.style.transform = `translate(calc(${-offset5.x}px - 50%), calc(${-offset5.y}px - 50%))`; */

}

divVeng.addEventListener("mousemove", avengersAnimation)