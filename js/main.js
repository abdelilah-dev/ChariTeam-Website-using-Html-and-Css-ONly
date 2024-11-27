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
