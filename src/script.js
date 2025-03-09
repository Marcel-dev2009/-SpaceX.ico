const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

/* const animation = lottie.loadAnimation({
    container: document.getElementById('uni-animate'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Rocket_custom_icon (1).json'
}

) */
