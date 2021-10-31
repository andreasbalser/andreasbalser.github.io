function toggleBurgerMenu() {

    const burgerList = document.getElementById("burgerList");
    const navbar = document.getElementById("mobile");

    burgerList.style.opacity = burgerList.style.opacity === "0" ? "1" : "0";
    navbar.style.height = navbar.style.height === "60px" ? "140px" : "60px";
}
