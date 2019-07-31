window.onload = index;

function index(){
document.getElementById("button").addEventListener("click",view, false);
}

function view(){
    let nav = document.querySelector("div.header-nav__search");
    nav.classList.toggle("mediaflex");
}