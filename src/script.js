const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const blurEFFECT = document.querySelector(".content");
const blur = document.querySelector(".container");
const navbar = document.getElementById("menu");
const toggle = document.getElementById("menuToggle");

window.addEventListener("scroll", () => {

      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      } 
            if(menuToggle.classList.contains("open")){
                menuToggle.classList.remove("open");
            }
                if (blurEFFECT.classList.contains("menu-open")) {
                    blurEFFECT.classList.remove("menu-open");
                    
                }
                        if (blur.classList.contains("menu-open")) {
                            blur.classList.remove("menu-open");
                        }
                    })

/* const counter = document.querySelector(".counter");
const menuList = document.querySelector(".menu"); */

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
    blurEFFECT.classList.toggle("menu-open");
    blur.classList.toggle("menu-open");


});


