// Set initial state before animation
gsap.set(["nav", ".name", ".list ul li", ".btn", ".menu"], { opacity: 0 });

// GSAP Animation
gsap.to("nav", { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
gsap.to(".name", { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
gsap.to(".list ul li", { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2, delay: 0.4 });
gsap.to(".btn", { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 1 });
gsap.to(".menu", { rotation: 0, opacity: 1,y:0, duration: 1, ease: "power3.out", delay: 1.2 });

document.addEventListener("DOMContentLoaded", function () {
    // Function to animate elements when they enter the viewport
    function animateOnScroll(elements, transformValue) {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "0";
                    entry.target.style.transform = transformValue;
                    setTimeout(() => {
                        entry.target.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translate(0, 0)";
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        elements.forEach(el => observer.observe(el));
    }

    // Apply animation to all sections of the page
    animateOnScroll(document.querySelectorAll(".navi > *, .list ul li a, .btn, .menu"), "translateY(-50px)");
    animateOnScroll(document.querySelectorAll(".info > *, .imge"), "translateX(-100px)");
    animateOnScroll(document.querySelectorAll(".bkimg, .art-content > *"), "translateY(100px)");
});


document.addEventListener("DOMContentLoaded", function () {
    // Function to animate elements when they enter the viewport
    function animateOnScroll(elements, transformValue) {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "0";
                    entry.target.style.transform = transformValue;
                    setTimeout(() => {
                        entry.target.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translate(0, 0)";
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        elements.forEach(el => observer.observe(el));
    }

    // Apply animation to all sections of the page (excluding .meet1)
    animateOnScroll(document.querySelectorAll(".navi > *, .list ul li a, .btn, .menu"), "translateY(-50px)");
    animateOnScroll(document.querySelectorAll(".info > *, .imge"), "translateX(-100px)");
    animateOnScroll(document.querySelectorAll(".bkimg, .art-content > *"), "translateY(100px)");
    animateOnScroll(document.querySelectorAll(".figure > *:not(.free), .di3 .headlines, .button > *"), "translateY(100px)");

    // ✅ `.meet1` is removed from the animations, keeping it static
});
document.addEventListener("DOMContentLoaded", function () {
    function animateOnScroll(elements, direction) {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "0";
                    entry.target.style.transform = direction;
                    setTimeout(() => {
                        entry.target.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translate(0, 0)";
                    }, 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        elements.forEach(el => observer.observe(el));
    }

    // Applying animations
    animateOnScroll(document.querySelectorAll(".sec1 h1"), "translateX(-100px)"); // From left
    animateOnScroll(document.querySelectorAll(".sec2 p"), "translateX(100px)"); // From right

    animateOnScroll(document.querySelectorAll(".dec img"), "translateX(-100px)"); // From left

    animateOnScroll(document.querySelectorAll(".bec1:nth-child(odd)"), "translateX(-100px)"); // Odd from left
    animateOnScroll(document.querySelectorAll(".bec1:nth-child(even)"), "translateX(100px)"); // Even from right

    animateOnScroll(document.querySelectorAll(".jec p"), "translateX(-100px)"); // From left

    animateOnScroll(document.querySelectorAll(".gec1 img"), "translateX(-100px)"); // Image from left
    animateOnScroll(document.querySelectorAll(".gec2 p"), "translateX(100px)"); // Text from right

    animateOnScroll(document.querySelectorAll(".cec1 p"), "translateX(-100px)"); // From left
    animateOnScroll(document.querySelectorAll(".cec2 img"), "translateX(100px)"); // From right

    animateOnScroll(document.querySelectorAll(".aec2 img"), "translateX(-100px)"); // From left
    animateOnScroll(document.querySelectorAll(".aec1 p"), "translateX(100px)"); // From right

    animateOnScroll(document.querySelectorAll(".fec1 h3"), "translateX(-100px)"); // From left
    animateOnScroll(document.querySelectorAll(".fec1 ul"), "translateX(100px)"); // From right

    // animateOnScroll(document.querySelectorAll(".footer-content .contact-info"), "translateX(-100px)"); // From left
    // animateOnScroll(document.querySelectorAll(".footer-content .quick-links"), "translateX(100px)"); // From right
    // animateOnScroll(document.querySelectorAll(".footer-content .newsletter"), "translateX(-100px)"); // From left
});
