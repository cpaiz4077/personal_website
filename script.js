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

    for(i = 0; i < para.length; i++) {
    para[i].style.color = "black";
    }

    for(i = 0; i < lists.length; i++) {
    lists[i].style.color = "black";
    }

    for(i = 0; i < headings1.length; i++) {
    headings1[i].style.color = "black";
    }

    for(i = 0; i < headings2.length; i++) {
    headings2[i].style.color = "black";
    }

    for(i = 0; i < headings3.length; i++) {
    headings3[i].style.color = "black";
    }

    body.style.backgroundColor = "white";

    pageDivisor2.style.borderColor = "black";
    pageDivisor3.style.borderColor = "black";

    realHeading.style.backgroundColor = "white";
    navBar.style.backgroundColor = "white";
    realHeading.style.borderColor = "black";
    navBar.style.borderColor = "black";
    portrait.style.borderColor = "black";

    lightModeToggle.src = "images/nightmode.svg";

    lightModeSwitch++;
}

    else if (lightModeSwitch == 1) {
    for(i = 0; i < para.length; i++) {
    para[i].style.color = "white";
    }

    for(i = 0; i < lists.length; i++) {
    lists[i].style.color = "white";
    }

    for(i = 0; i < headings1.length; i++) {
    headings1[i].style.color = "white";
    }

    for(i = 0; i < headings2.length; i++) {
    headings2[i].style.color = "white";
    }

    for(i = 0; i < headings3.length; i++) {
    headings3[i].style.color = "white";
    }

    body.style.backgroundColor = "black";

    pageDivisor2.style.borderColor = "white";
    pageDivisor3.style.borderColor = "white";

    realHeading.style.backgroundColor = "black";
    navBar.style.backgroundColor = "black";
    realHeading.style.borderColor = "white";
    navBar.style.borderColor = "white";
    portrait.style.borderColor = "white";

    lightModeSwitch = 0;
    lightModeToggle.src = "images/lightmode.svg";
    }

}