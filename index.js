let menu = document.querySelector("#menu")
let showContent = document.querySelector(".tab-header-bottom")

menu.addEventListener("click",()=>{ menu.className == "fa-solid fa-bars" ? show() : hide() })

function show() {
    menu.className = "fa-solid fa-xmark"
    showContent.style.display = "block"
}
function hide() {
    menu.className = "fa-solid fa-bars"
    showContent.style.display = "none"
}