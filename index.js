function apimg1() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank")
}
function apimg2() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank")
}
let num = 1;
function chooseimage() {
    if (num === 1) {
        document.getElementById("test2").style.display = "none";
        document.getElementById("test3").style.display = "none";
        document.getElementById("test1").style.display = "block";
    }
    else if (num === 2) {
        document.getElementById("test1").style.display = "none";
        document.getElementById("test3").style.display = "none";
        document.getElementById("test2").style.display = "block";
    }
    else if (num === 3) {
        document.getElementById("test1").style.display = "none";
        document.getElementById("test2").style.display = "none";
        document.getElementById("test3").style.display = "block";
    }
}
function carouselarrowleft() {
    if (num === 1) {
        num = 3;
    }
    else if (num === 2) {
        num = 1;
    }
    else if (num === 3) {
        num = 2;
    }
    chooseimage();
}
function carouselarrowright() {
    if (num === 1) {
        num = 2;
    }
    else if (num === 2) {
        num = 3;
    }
    else if (num === 3) {
        num = 1;
    }
    chooseimage();
}
function hamburgercolor() {
    if (document.getElementById("sidebar").style.display === "flex") {
        document.getElementById("hamburger").style.color = "white";
        document.getElementById("hamburger").style.borderColor = "white";
        document.getElementById("sidebar").style.display = "none";
    }
    else {
        document.getElementById("hamburger").style.color = "black";
        document.getElementById("hamburger").style.borderColor = "black";
        document.getElementById("sidebar").style.display = "flex";

    }
}