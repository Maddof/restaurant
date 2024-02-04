import homeRender from "./home.js";
import menuRender from "./menu.js";
import aboutRender from "./about.js";
import "./style.scss";

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".menubtn");

homeRender();

function resetRender() {
  content.textContent = "";
}

function btnClick(e) {
  console.log(e.target.value);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active-btn", "");
  }
  e.currentTarget.className += " active-btn";
  if (e.target.value === "menu") {
    resetRender();
    menuRender();
  }
  if (e.target.value === "home") {
    resetRender();
    homeRender();
  }
  if (e.target.value === "about") {
    resetRender();
    aboutRender();
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", btnClick);
});
