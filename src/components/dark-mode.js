const btn = document.getElementById("dark-mode");
const body = document.querySelector("body");



const darkMode = () => {
  body.classList.toggle("bg-customBlack-blacklightdark");
  
  body.classList.toggle("text-white");
};

btn.addEventListener("click", darkMode);

export default darkMode;

