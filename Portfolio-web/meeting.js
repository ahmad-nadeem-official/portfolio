//meeting 
let met  = document.querySelector(".meet");
let met1 = document.querySelector(".meet01");
let ic = document.querySelector(".ic");

function show(){
    met1.style.visibility = 'visible';
}
function hide(){
    met1.style.visibility = 'hidden';
}

ic.addEventListener('click', hide)
met.addEventListener('click', show)



// document.addEventListener('DOMContentLoaded', () => {
//     const marquee = document.getElementById('marquee');
//     const marqueeText = document.getElementById('marqueeText');
//     let colors = ['#00ffae', '#ff006e', '#ffc300', '#0fbcf9', '#3ae374'];
//     let colorIndex = 0;
  
//     // Function to check if the element is in the viewport
//     function isInViewport(el) {
//       const rect = el.getBoundingClientRect();
//       return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     }
  
//     // Function to start animation and change color
//     function startMarqueeAnimation() {
//       marqueeText.style.animationPlayState = 'running'; // Start animation
//       marqueeText.addEventListener('animationiteration', () => {
//         colorIndex = (colorIndex + 1) % colors.length;
//         document.documentElement.style.setProperty('--marquee-color', colors[colorIndex]);
//       });
//     }
  
//     // Event listener to detect scroll and trigger animation
//     window.addEventListener('scroll', () => {
//       if (isInViewport(marquee)) {
//         startMarqueeAnimation();
//       }
//     });
//   });
  

