const aboutRender = () => {
  const paraAbout1 = document.createElement("h2");
  const paraAbout2 = document.createElement("p");

  paraAbout1.textContent = "About us";
  paraAbout2.textContent =
    "We have been flippin hamburgers since the early 90's.";

  content.appendChild(paraAbout1);
  content.appendChild(paraAbout2);
};

export default aboutRender;
