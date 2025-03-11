const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const blurEFFECT = document.querySelector(".content");
const blur = document.querySelector(".container");

/* const counter = document.querySelector(".counter");
const menuList = document.querySelector(".menu"); */

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
    blurEFFECT.classList.toggle("menu-open");
    blur.classList.toggle("menu-open");

   /*  counter.classList.toggle("opened");
    menuList.classList.toggle("opened"); */
});

/* const animation = lottie.loadAnimation({
    container: document.getElementById('uni-animate'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Rocket_custom_icon (1).json'
}

) */
