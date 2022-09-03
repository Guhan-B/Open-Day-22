const navbar = document.querySelector(".navigation_wrapper");
const links = document.getElementById("links");
const toggle = document.querySelector(".hamburger");

document.addEventListener('scroll', function (e) {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 0px 5px 0px";
        console.log(navbar.style.boxShadow)
    } else {
        navbar.style.boxShadow = ""
    }
});

toggle.addEventListener("click",() => {
    toggle.classList.toggle("is-active")
    links.classList.toggle("visible");
})