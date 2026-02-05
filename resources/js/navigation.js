const toggleMenu = () => {
    document.getElementById("navbarLinks")
        .classList.toggle("navbar-show");
};

window.onresize = () => {
    if (window.innerWidth > 768) {
        document.getElementById("navbarLinks")
            .classList.remove("navbar-show");
    }
};
