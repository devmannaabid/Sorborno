
  const cardContainer = document.getElementById('cardContainer');
  const cardCount = cardContainer.children.length;
  let currentIndex = 0;

  const updateTransform = () => {
    const containerWidth = cardContainer.parentElement.offsetWidth;
    cardContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
  };

  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateTransform();
    }
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < cardCount - 1) {
      currentIndex++;
      updateTransform();
    }
  });

  window.addEventListener('resize', updateTransform);