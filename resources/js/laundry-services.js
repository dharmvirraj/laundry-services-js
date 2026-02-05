document.addEventListener("DOMContentLoaded", () => {

    const cartList = document.querySelector(".added-items-list");
    const totalPrice = document.getElementById("total-price");
    const noItems = document.querySelector(".no-items");

    let items = JSON.parse(localStorage.getItem("cartItems")) || [];

    const updateCart = () => {
        const rows = document.querySelectorAll(".added-item-row");

        for (let i = 0; i < rows.length; i++) {
            rows[i].remove();
        }

        let total = 0;

        if (items.length === 0) {
            noItems.style.display = "flex";
        } else {
            noItems.style.display = "none";

            for (let i = 0; i < items.length; i++) {
                total = total + items[i].price;

                const row = document.createElement("div");
                row.className = "added-item-row";

                row.innerHTML =
                    "<span class='sn'>" + (i + 1) + "</span>" +
                    "<span class='service-name'>" + items[i].name + "</span>" +
                    "<span class='service-price'>₹" + items[i].price.toFixed(2) + "</span>";

                cartList.appendChild(row);
            }
        }

        totalPrice.innerText = "₹" + total.toFixed(2)
        localStorage.setItem("cartItems", JSON.stringify(items));
    };

    const services = document.querySelectorAll(".item-wrap");

    for (let i = 0; i < services.length; i++) {

        const service = services[i];
        const addBtn = service.querySelector(".btn-add");
        const removeBtn = service.querySelector(".btn-remove");

        const name = service.querySelector(".product-item p").innerText.trim();
        const price = parseFloat(
            service.querySelector("strong").innerText.replace("₹", "")
        );

        for (let j = 0; j < items.length; j++) {
            if (items[j].name === name) {
                addBtn.style.display = "none";
                removeBtn.style.display = "flex";
            }
        }

        addBtn.addEventListener("click", function (e) {
            e.preventDefault();
            items = JSON.parse(localStorage.getItem("cartItems")) || [];
            items.push({ name: name, price: price });
            addBtn.style.display = "none";
            removeBtn.style.display = "flex";
            document.getElementById("errorMessage").style.display = "none";
            updateCart();
        });

        removeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            items = JSON.parse(localStorage.getItem("cartItems")) || [];
            items = items.filter(item => item.name !== name);
            addBtn.style.display = "flex";
            removeBtn.style.display = "none";
            updateCart();
        });
    }

    updateCart();
});
