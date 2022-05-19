//* Order Modal

const orderModal = document.querySelector("#order-modal");
const orderButton = document.querySelector("#order-button");
const orderModalCloseButton = document.querySelector("#order-modal-close-button");

orderButton.addEventListener("click", () => {
    orderModal.classList.add("d-flex");
    orderModal.classList.remove("d-none");
});

orderModalCloseButton.addEventListener("click", () => {
    orderModal.classList.add("d-none");
    orderModal.classList.remove("d-flex");
});