document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555"; // Change background color on scroll
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });
});
