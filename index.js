// var x = document.getElementById('footer');

// ScrollReveal().reveal('#footer', {delay: 400, origin: 'bottom', distance: '40%', reset: true});

ScrollReveal().reveal("#nigga2", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
});

// Funkcja do wczytania i wyświetlenia danych o piwach
async function loadBeers() {
  try {
    const response = await fetch("data/beers.xml");
    const data = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");

    const beers = xmlDoc.getElementsByTagName("beer");
    const beerList = document.getElementById("beer-list");

    const beerGrid = document.createElement("div");
    beerGrid.className = "beer-grid";

    Array.from(beers).forEach((beer) => {
      const card = document.createElement("div");
      card.className = "beer-card";

      const name = beer.getElementsByTagName("name")[0].textContent;
      const brewery = beer.getElementsByTagName("brewery")[0].textContent;
      const description =
        beer.getElementsByTagName("description")[0].textContent;
      const alcohol = beer.getElementsByTagName("alcohol")[0].textContent;
      const price = beer.getElementsByTagName("price")[0].textContent;
      const ingredients = Array.from(
        beer.getElementsByTagName("ingredient")
      ).map((ing) => ing.textContent);

      card.innerHTML = `
        <h2>${name}</h2>
        <div class="brewery">${brewery}</div>
        <p class="description">${description}</p>
        <ul class="ingredients-list">
          ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
        <div class="details">
          <span>${alcohol}% ABV</span>
          <span>${price} PLN</span>
        </div>
      `;

      beerGrid.appendChild(card);
    });

    beerList.appendChild(beerGrid);

    // Animacja dla kart
    ScrollReveal().reveal(".beer-card", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      interval: 200,
    });
  } catch (error) {
    console.error("Błąd podczas wczytywania danych:", error);
  }
}

// Wywołaj funkcję po załadowaniu strony
document.addEventListener("DOMContentLoaded", loadBeers);

console.log("scripts/index.js loaded");
