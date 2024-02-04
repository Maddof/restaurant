import Hamburgerimg from "./hamburger.jpg";

const homeRender = () => {
  const paraHome1 = document.createElement("p");
  const paraHome2 = document.createElement("p");
  const hamburgerImg = new Image();

  hamburgerImg.src = Hamburgerimg;
  hamburgerImg.classList.add("hamburger-img");
  hamburgerImg.setAttribute("alt", "man with hamburger");
  hamburgerImg.setAttribute("width", "640");
  hamburgerImg.setAttribute("height", "427");
  paraHome1.textContent = "The best burgers in Town!";
  paraHome2.textContent = "Slices, buns and meats";

  content.appendChild(hamburgerImg);
  content.appendChild(paraHome1);
  content.appendChild(paraHome2);
};

export default homeRender;
