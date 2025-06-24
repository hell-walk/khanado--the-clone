// script.js

window.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");

    input.addEventListener("focus", () => {
        input.style.backgroundColor = "#fff2ea";
    });

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "white";
    });

    // Smooth page entrance animation for all major blocks
    document.querySelector("main").style.opacity = 0;
    setTimeout(() => {
        document.querySelector("main").style.opacity = 1;
        document.querySelector("main").style.transition = "opacity 1s ease-in";
    }, 300);
});
