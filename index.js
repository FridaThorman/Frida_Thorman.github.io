const Toggle =document.querySelector(".toggle")
const navUl =document.querySelector(".nav ul")

Toggle.addEventListener("click", () => {
    navUl.classList.toggle("nav-ul_visible")
} );