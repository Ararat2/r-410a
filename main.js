//* Order Modal

const orderModal = document.querySelector("#order-modal");
const orderButton = document.querySelector("#order-button");
const retailPurchaseButton = document.querySelector("#retail-purchase-button");
const wholesalePurchaseButton = document.querySelector("#wholesale-purchase-button")
const orderModalCloseButton = document.querySelector("#order-modal-close-button");

const onOrderModalOpen = () => {
    orderModal.classList.add("d-flex");
    orderModal.classList.remove("d-none");
}

orderButton.addEventListener("click", onOrderModalOpen);;

retailPurchaseButton.addEventListener("click", onOrderModalOpen);

wholesalePurchaseButton.addEventListener("click", onOrderModalOpen);

orderModalCloseButton.addEventListener("click", () => {
    orderModal.classList.add("d-none");
    orderModal.classList.remove("d-flex");
});