let menuClick = document.querySelector(".menubar-mobile");

let menubar = document.querySelector(".menubar");

menuClick.addEventListener('click', function () {
    menubar.classList.toggle("clicked")
})

