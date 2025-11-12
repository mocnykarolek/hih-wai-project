const button = document.getElementById("przycisk");

let var1 = 0;

const afterClick = () => {
  const text = document.createElement("p");
  text.textContent = "chuj";
  document.getElementById("wyszukaj").appendChild(text);
  console.log("nigger");
};

button.addEventListener("click", afterClick);


const footerP = document.getElementById("footer-p");


footerP.classList.add('footer_p');
console.log(footerP);