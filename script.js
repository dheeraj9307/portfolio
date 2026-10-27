
"use strict";

/* ==================== STICKY HEADER ==================== */

const header = document.querySelector("header");

if (header) {
    const updateHeader = () => {
        header.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
}

/* ==================== MOBILE NAVIGATION ==================== */

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

function closeMenu() {
    if (!menu || !navlist) return;

    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
    menu.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
    if (!menu || !navlist) return;

    const isOpen = navlist.classList.toggle("active");

    menu.classList.toggle("bx-x", isOpen);
    menu.setAttribute("aria-expanded", String(isOpen));
}

if (menu && navlist) {
    menu.addEventListener("click", toggleMenu);

    // Support keyboard activation because the existing HTML uses a div.
    menu.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleMenu();
        }

        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Close the mobile menu after selecting a navigation link.
    navlist.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close the mobile menu when the user scrolls.
    window.addEventListener("scroll", closeMenu, { passive: true });
}

/* ==================== SCROLL REVEAL ANIMATIONS ==================== */

if (typeof ScrollReveal === "function") {
    const sr = ScrollReveal({
        distance: "45px",
        duration: 1000,
        reset: false,
        mobile: true,
        cleanup: true
    });

    sr.reveal(".home-text", {
        delay: 150,
        origin: "left"
    });

    sr.reveal(".home-img", {
        delay: 150,
        origin: "right"
    });

    sr.reveal(
        ".sub-service, .about, .portfolio, .service, .cta, .contact",
        {
            delay: 100,
            origin: "bottom",
            interval: 100
        }
    );
}
