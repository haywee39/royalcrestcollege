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

    // Tour Form Toggle (MUST BE INSIDE THE CALLBACK)
    const tourToggle = document.getElementById("tourToggle");
    const tourFormOverlay = document.getElementById("tourFormOverlay");
    const closeTourForm = document.getElementById("closeTourForm");

    tourToggle.addEventListener("click", () => {
      tourFormOverlay.classList.add("show");
      tourToggle.textContent = "CLOSE";
    });

    closeTourForm.addEventListener("click", () => {
      tourFormOverlay.classList.remove("show");
      tourToggle.textContent = "Schedule a Tour";
    });
  });
