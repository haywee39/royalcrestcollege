  // Load navbar dynamically
    fetch("nav.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("nav").innerHTML = data;

        // Re-attach JS for menu toggle AFTER injection
        const menuToggle = document.getElementById("menuToggle");
        const fullscreenNav = document.getElementById("fullscreenNav");
        let menuOpen = false;

        menuToggle.addEventListener("click", () => {
          menuOpen = !menuOpen;
          if (menuOpen) {
            fullscreenNav.classList.add("show");
            menuToggle.textContent = "CLOSE";
          } else {
            fullscreenNav.classList.remove("show");
            menuToggle.textContent = "MENU";
          }
        });
      });