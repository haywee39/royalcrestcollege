// FULLSCREEN MENU DESIGN
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
// *******************************************************
// ANIMATED SCROLL 

document.addEventListener('DOMContentLoaded', () => {

    // Scroll Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options for the observer
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Select all sections to animate
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});

// ABOUT SCRIPT 
// ************************************************************************
// THE TEAM PROFILE IN THE ABOUT SECTION PICTURES SLIDES IN 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".team-profile");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});

