/*------------------------------*/
/* Hamburger Menu               */
/*------------------------------*/

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menupunkter");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// /*------------------------------*/
// /* Dark Mode Toggle             */
// /*------------------------------*/

// let darkMode = localStorage.getItem("darkMode"); //local storage for dark mode preference
// const darkModeToggle = document.querySelector("#dark-mode-toggle");

// //check if dark mode is enabled
// //if enabled turn off
// //if disabled turn on

// const enableDarkMode = () => {
//   //add class dark mode to the body
//   document.body.classList.add("darkmode");
//   //update dark mode in local storage
//   localStorage.setItem("darkMode", "enabled");
//   //
// };

// const disableDarkMode = () => {
//   //remove class dark mode from the body
//   document.body.classList.remove("darkmode");
//   //update dark mode in local storage
//   localStorage.setItem("darkMode", "disabled");
//   //
// };

// //check if dark mode is enabled on page load
// if (darkMode === "enabled") {
//   enableDarkMode(); //if dark mode is enabled, enable it
// }

// //dark mode checker
// darkModeToggle.addEventListener("click", () => {
//   darkMode = localStorage.getItem("darkMode"); //update dark mode variable
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//     console.log(darkMode);
//   } else {
//     disableDarkMode();
//     console.log(darkMode);
//   }
// });

/*------------------------------*/
/* Theme Selector               */
/*------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const themeSelect = document.querySelector("#dark-theme");
  const root = document.documentElement;

  if (!themeSelect) return;

  themeSelect.addEventListener("change", (event) => {
    root.style.colorScheme = event.target.value;
  });
});

/*------------------------------*/
/* Image Carousel               */
/*------------------------------*/

// find alle carouseller på siden
const carousels = document.querySelectorAll(".image-carousel");

carousels.forEach((carousel) => {
  const images = carousel.querySelectorAll(".carousel-item");
  if (images.length === 0) return;

  let current = 0;
  images[current].classList.add("active"); // vis første slide i DENNE carousel

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length; // gå til næste slide, loop tilbage til start
    images[current].classList.add("active");
  }, 5000);
});
