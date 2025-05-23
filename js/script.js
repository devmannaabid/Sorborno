document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    function checkScroll() {
      elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add("scrolled");
        }
      });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => {
        el.classList.add("show");
    });
});

