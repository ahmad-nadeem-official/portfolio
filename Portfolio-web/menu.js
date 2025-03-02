//top menu
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav2");
    const clos = document.querySelector(".cls");

    // Check if elements exist before adding event listeners
    if (menu && nav && clos) {
        function show1() {
            nav.style.visibility = 'visible';
        }

        function hide1() {
            nav.style.visibility = 'hidden';
        }

        clos.addEventListener('click', hide1);
        menu.addEventListener('click', show1);
    } else {
        console.error("One or more elements (.menu, .nav2, .cls) not found in the DOM");
    }
});
