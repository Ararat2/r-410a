"use strict";

//* Mobile Menu

const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuOpenButton = document.querySelector("#mobile-menu-open-button");
const mobileMenuCloseButton = document.querySelector("#mobile-menu-close-button");

const onMobileMenuOpen = () => {
    document.body.style.overflowY = "hidden";

    mobileMenu.classList.add("d-flex");
    mobileMenu.classList.remove("d-none");
};

const onMobileMenuClose = () => {
    document.body.style.overflowY = "visible";

    mobileMenu.classList.add("d-none");
    mobileMenu.classList.remove("d-flex");
}

const onMobileMenuClick = e => {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        onMobileMenuClose();
    }
};

mobileMenuOpenButton.addEventListener("click", onMobileMenuOpen);
mobileMenuCloseButton.addEventListener("click", onMobileMenuClose);
mobileMenu.addEventListener("click", onMobileMenuClick);

//* Order Modal

const orderModal = document.querySelector("#order-modal");
const orderButton = document.querySelector("#order-button");
const mobileMenuOrderButton = document.querySelector("#mobile-menu-order-button");
const retailPurchaseButton = document.querySelector("#retail-purchase-button");
const wholesalePurchaseButton = document.querySelector("#wholesale-purchase-button")
const orderModalCloseButton = document.querySelector("#order-modal-close-button");

const onOrderModalOpen = () => {
    orderModal.classList.add("d-flex");
    orderModal.classList.remove("d-none");
}

const onOrderModalClose = () => {
    orderModal.classList.add("d-none");
    orderModal.classList.remove("d-flex");
}

orderButton.addEventListener("click", onOrderModalOpen);
mobileMenuOrderButton.addEventListener("click", onOrderModalOpen);
retailPurchaseButton.addEventListener("click", onOrderModalOpen);
wholesalePurchaseButton.addEventListener("click", onOrderModalOpen);
orderModalCloseButton.addEventListener("click", onOrderModalClose);
