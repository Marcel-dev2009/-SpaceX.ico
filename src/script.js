const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const overlay = document.querySelector('.overlay')

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.contains("open") ? "block" : "none";
});
overlay.addEventListener("click ",() => {
    menu.classList.remove("open");
    overlay.style.display = "none";
});