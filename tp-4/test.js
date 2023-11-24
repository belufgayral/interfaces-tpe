const wrapper = document.getElementById("test");
// window.addEventListener('scroll', function() {
//     let y = section.scrollTop;
//     console.log(y);
// });

let x = wrapper.scrollHeight;
    console.log(x);

// section.onscroll = function() {
//     let y = section.scrollTop;
//     console.log(y);
// }

wrapper.onscroll = function () {
    let y = wrapper.scrollTop;
    console.log(y);
  };