 const scrollContainer = document.querySelector('.scroll-container');
      let scrollAmount = 0;
      const scrollStep = 1; // pixels per step
      const scrollInterval = 30; // ms
    
      function autoScroll() {
        if (scrollContainer.scrollWidth - scrollContainer.clientWidth === scrollAmount) {
          scrollAmount = 3;
          scrollContainer.scrollLeft = 3;
        } else {
          scrollAmount += scrollStep;
          scrollContainer.scrollLeft += scrollStep;
        }
      }
    
      setInterval(autoScroll, scrollInterval);