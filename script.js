let lightModeToggle = document.getElementById("lightModeToggle");

let body = document.querySelector("body");
let para = document.querySelectorAll("p");
let lists = document.querySelectorAll("li");
let headings1 = document.querySelectorAll("h1");
let headings2 = document.querySelectorAll("h2");
let headings3 = document.querySelectorAll("h3");
let portrait = document.getElementById("portrait");


let realHeading = document.getElementById("heading");
let navBar = document.getElementById("navbar");

// page divisors

let pageDivisor2 = document.getElementById("pagedivisor2");
let pageDivisor3 = document.getElementById("pagedivisor3");

// counter for light mode 

let lightModeSwitch = 0;

lightModeToggle.onclick = function(event) {

    event.preventDefault();

    if (lightModeSwitch == 0) {
        document.body.setAttribute("data-theme", "light");

        lightModeToggle.src = "images/nightmode.svg";
        lightModeSwitch = 1;
    } else {
        document.body.setAttribute("data-theme", "");

        lightModeSwitch = 0;
        lightModeToggle.src = "images/lightmode.svg";
    }

}