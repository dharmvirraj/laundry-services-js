const form = document.querySelector(".checkout-form");
const submitBtn = form.querySelector("button");
const successMessage = document.getElementById("successMessage");
const errorMsg = document.getElementById("errorMessage");

const clearCartUI = () => {
    document.querySelectorAll(".added-item-row").forEach(row => row.remove());
    document.getElementById("total-price").innerText = "₹0.00";
    document.querySelector(".no-items").style.display = "flex";
    document.querySelectorAll(".item-wrap").forEach(service => {
        service.querySelector(".btn-add").style.display = "flex";
        service.querySelector(".btn-remove").style.display = "none";
    });
}

form.addEventListener("input", () => {
    submitBtn.disabled = false;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cartItems.length === 0) {
        errorMsg.style.display = "flex";
        return;
    }

    let templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };
    emailjs.send("service_a1d1zkc", "template_uwrzwkc", templateParams);

    successMessage.style.display = "flex";

    localStorage.removeItem("cartItems");
    clearCartUI();

    form.reset();
    submitBtn.disabled = true;

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 2000);
});
