const menuMobile = document.getElementById("menu-mobile");
const navMobile = document.getElementById("nav-mobile");
const root = document.getElementById("root");

const Menu = () => {
    const showMenu = () => {
        navMobile.classList.toggle("hidden");
    };

    const closeMenu = () => {
        navMobile.classList.contains("hidden") ? console.log("true") : navMobile.classList.add("hidden"); 
    };
    menuMobile.addEventListener("click", showMenu);

    root.addEventListener("click", closeMenu);
};

export default Menu;