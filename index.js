// var x = document.getElementById('footer');

// ScrollReveal().reveal('#footer', {delay: 400, origin: 'bottom', distance: '40%', reset: true});

ScrollReveal().reveal("footer p", {
  distance: "60px",
  origin: "top",
  duration: 1000,
  delay: 100,
  easing: "ease-out",
  opacity: 0,
  reset: false, // ustaw na true, jeśli chcesz, żeby animacja powtarzała się
});

console.log('scripts/index.js loaded');