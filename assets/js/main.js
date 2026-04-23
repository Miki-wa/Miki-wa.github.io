'use strict';

{
    const menu = document.getElementById("menu");
    const sidebar = document.querySelector(".sidebar-inner");
    const navLinks = document.querySelectorAll(".sidebar a");

    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        sidebar.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            sidebar.classList.remove("active");
        });
    });
}