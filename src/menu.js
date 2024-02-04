const menuRender = () => {
  const paraMenu1 = document.createElement("h2");
  const paraMenu2 = document.createElement("p");

  paraMenu1.textContent = "Menu";
  paraMenu2.textContent =
    "We got some good hamburgers. Our specials are very special.";

  content.appendChild(paraMenu1);
  content.appendChild(paraMenu2);
};

export default menuRender;
