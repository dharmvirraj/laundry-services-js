function toggleMenu() {
    document.getElementById("navbarLinks")
        .classList.toggle("navbar-show");
}

window.onresize = function () {
    if (window.innerWidth > 768) {
        document.getElementById("navbarLinks")
            .classList.remove("navbar-show");
    }
};