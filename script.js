// Popup Menus and whatever
// Backgrounds popup menu
let bpop = document.querySelector(".bpop");
let backgroundPop = document.querySelector(".background-popup");
const addFuncBpop = () => {
  bpop.style.display = "flex";
}
const removeFuncBpop = () => {
  bpop.style.display = "none";
}
backgroundPop.addEventListener("click", addFuncBpop);

// Extensions popup menu
// let epop = document.querySelector(".epop");
// let extensionsPop = document.querySelector(".extensions-popup");
// const addFuncEpop = () => {
//   epop.style.display = "flex";
// }
// const removeFuncEpop = () => {
//   epop.style.display = "none";
// }
// extensionsPop.addEventListener("click", addFuncEpop);

// Products popup menu
// let ppop = document.querySelector(".ppop");
// let productsPop = document.querySelector(".products-popup");
// const addFuncPpop = () => {
//   ppop.style.display = "flex";
// }
// const removeFuncPpop = () => {
//   ppop.style.display = "none";
// }
// productsPop.addEventListener("click", addFuncPpop);

// Checkout Popup
let cpop = document.querySelector(".fa-shopping-cart");
let checkoutPop = document.querySelector(".checkout-style");
const addFuncCpop = () => {
  checkoutPop.style.display = "flex";
}
// const removeFuncCpop = () => {
//   cpop.style.display = "none";
// }
cpop.addEventListener("click", addFuncCpop);

// Exit button for Popup menus
let exitButton = document.querySelector(".fa-times");
exitButton.addEventListener("click", removeFuncBpop);

// Cart and Checkout functions and such
let addToCart = document.querySelectorAll(".add-to-cart");
let cartDeets = document.querySelector(".checkout-deets");
let cart = document.querySelector(".fa-shopping-cart");

addToCart.addEventListener("click", (event) => {
  addToCart.forEach(() => {
    let title = event.target.getAttribute("data-title");
    let info = event.target.getAttribute("data-info");
    let price = event.target.getAttribute("data-price");
    let cartItem = document.createElement("div");
    cartItem.append(title, price);
    cartDeets.append(cartItem);
  })
})