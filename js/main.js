let dropdown_lick = false;
function click_dropdown_btn() {
    if (!dropdown_lick) {
        document.getElementById("dropdown-menu").style.display = "block"
        dropdown_lick = true
    }
    else {
        document.getElementById("dropdown-menu").style.display = "none";
        dropdown_lick = false;
    }
}

let firstPrice = document.getElementById("first-price");
let secondPrice = document.getElementById("second-price");
let therdPrice = document.getElementById("therd-price");
function price_select(id) {
    console.log(id);
    if (id == 10) {
        firstPrice.classList.add("active");
        secondPrice.classList.remove("active");
        therdPrice.classList.remove("active");
    }
    else if (id == 20) {
        firstPrice.classList.remove("active");
        secondPrice.classList.add("active");
        therdPrice.classList.remove("active");
    }
    else if (id == 30) {
        firstPrice.classList.remove("active");
        secondPrice.classList.remove("active");
        therdPrice.classList.add("active");
    }
}
