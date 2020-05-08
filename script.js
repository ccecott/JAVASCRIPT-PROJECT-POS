let popup = document.querySelector(".pop");
let backgroundPop = document.querySelector(".background-popup");
const addFunc = () => {
    popup.style.display = "flex";
}
backgroundPop.addEventListener("click", addFunc);

let extensionsPop = document.querySelector(".extensions-popup");
extensionsPop.addEventListener("click", addFunc);


let productsPop = document.querySelector(".products-popup");
productsPop.addEventListener("click", addFunc);

let body = document.querySelector(".full-body");

body.addEventListener("click", (e) => {
    if (e.target.classList.contains("body")) {
        // e.target.removeEventListener();
        popup.style.display = "none"
    }
});

