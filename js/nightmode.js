function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.getElementById('modeToggle');
    const icon = toggleBtn.querySelector('i');

    body.classList.toggle("dark-mode");
    body.classList.toggle("bg-white");
    body.classList.toggle("text-dark");

    if (body.classList.contains("dark-mode")) {
      icon.classList.replace('bx-moon', 'bx-sun');
    } else {
      icon.classList.replace('bx-sun', 'bx-moon');
    }
  }