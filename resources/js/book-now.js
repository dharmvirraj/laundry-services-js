document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".checkout-form");
    const button = form.querySelector("button");
    const successMessage = document.getElementById("successMessage");

    // Enable button when user types
    form.addEventListener("input", function () {
        button.disabled = false;
    });

    // Handle form submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        successMessage.style.display = "flex";

        form.reset();

        button.disabled = true;

        setTimeout(function () {
            successMessage.style.display = "none";
        }, 2000);
    });
});
