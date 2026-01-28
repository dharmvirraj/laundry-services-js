document.addEventListener("DOMContentLoaded", () => {
    const totalPriceEl = document.getElementById("total-price");
    const addedItemsList = document.querySelector(".added-items-list");
    const noItemsEl = document.querySelector(".no-items");
    let items = [];

    // Update the Added Items UI and Total Price
    const updateUI = () => {
        // Remove old dynamic rows
        addedItemsList.querySelectorAll(".added-item-row.dynamic").forEach(el => el.remove());

        let total = 0;

        if (items.length === 0) {
            noItemsEl.style.display = "flex";
        } else {
            noItemsEl.style.display = "none";

            // Add items dynamically
            items.forEach((item, index) => {
                total += item.price;

                const row = document.createElement("div");
                row.className = "added-item-row dynamic";
                row.innerHTML = `
                    <span class="sn">${index + 1}</span>
                    <span class="service-name">${item.name}</span>
                    <span class="service-price">₹${item.price.toFixed(2)}</span>
                `;
                addedItemsList.appendChild(row);
            });
        }

        totalPriceEl.textContent = `₹${total.toFixed(2)}`;
    };

    // Toggle Add/Remove buttons visibility
    const toggleButtons = (addBtn, removeBtn, showAdd) => {
        addBtn.style.display = showAdd ? "flex" : "none";
        removeBtn.style.display = showAdd ? "none" : "flex";
    };

    document.querySelectorAll(".item-wrap").forEach(itemWrap => {
        const addBtn = itemWrap.querySelector(".btn-add");
        const removeBtn = itemWrap.querySelector(".btn-remove");

        const product = itemWrap.querySelector(".product-item p");
        const priceEl = itemWrap.querySelector("strong");

        const name = product.innerText.trim();
        const price = parseFloat(priceEl.innerText.replace("₹", ""));

        addBtn.addEventListener("click", () => {
            items.push({ name, price });
            toggleButtons(addBtn, removeBtn, false);
            updateUI();
        });

        removeBtn.addEventListener("click", () => {
            items = items.filter(item => item.name !== name);
            toggleButtons(addBtn, removeBtn, true);
            updateUI();
        });
    });

    noItemsEl.style.display = "flex";
});
