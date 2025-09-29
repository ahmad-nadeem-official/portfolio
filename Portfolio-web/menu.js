//top menu
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav2");
    const clos = document.querySelector(".cls");

    // Check if elements exist before adding event listeners
    if (menu && nav && clos) {
        function show1() {
            nav.style.transform= "translateY(0%)";
        }    

        function hide1() {
            nav.style.transform= "translateY(-100%)";
        }

        clos.addEventListener('click', hide1);
        menu.addEventListener('click', show1);

       window.addEventListener('click', function(event){
        if (!nav.contains(event.target) && event.target !== menu) {
                hide1();
            }
       })
       window.addEventListener('scroll', hide1);


    }else {
        console.error("One or more elements (.menu, .nav2, .cls) not found in the DOM");
    }
});





  