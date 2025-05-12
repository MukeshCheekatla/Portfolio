document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mainNav = document.getElementById("main-nav");

    hamburgerBtn.addEventListener("click", function () {
        mainNav.classList.toggle("active");
    });
});
