let menuClick = document.querySelector(".menubar-mobile");

let menubar = document.querySelector(".menubar");

menuClick.addEventListener('click', function () {
    if (menubar.classList.contains("clicked")) {
        menubar.classList.remove("clicked");
    } else {
        menubar.classList.add("clicked");
    }
})
