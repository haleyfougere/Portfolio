// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
// });


// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    // Get the element to apply the effect
    const happyHeading = document.getElementById("happy");

    // Define an array of colors
    const colors = ["red", "blue", "green", "purple", "orange", "gold", "pink", "cyan"];

    // Function to change the color
    function changeColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        happyHeading.style.color = randomColor; // Set a random color
    }

    // Change the color every 2 seconds
    setInterval(changeColor, 1000);
});