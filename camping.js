const burger = document.querySelector(".burger");
const burgerLine1 = document.querySelector(".burger .line1");
const burgerLine2 = document.querySelector(".burger .line2");
const burgerLine3 = document.querySelector(".burger .line3");
const navLinks = document.querySelector("#nav-links");
const searchBtn = document.querySelector("#nav-links li button");
const bodyInactive = document.querySelector("nav ~ *");


let showMenu = false;
burger.onclick = function() {
    if (showMenu == false) {
        showMenu = true;

        burgerLine1.style.transform = "rotate(45deg) translate(0.5rem, 0.7rem)";
        burgerLine2.style.opacity = "0";
        burgerLine3.style.transform = "rotate(-45deg) translate(0.5rem, -0.75rem)";

        navLinks.style.animation = "navLinksFadeIn 0.5s ease-in forwards";
        
    } else {
        showMenu = false;
        burgerLine1.style.transform = "rotate(0deg) translate(0px, 0px)";
        burgerLine2.style.opacity = "1";
        burgerLine3.style.transform = "rotate(0deg) translate(0px, 0px)";
        
        navLinks.style.animation = "navLinksFadeOut 0.5s ease-in";
    }
}
