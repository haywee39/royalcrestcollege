// Load footer.html into the #footer div
fetch("/footer-area/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-page").innerHTML = data;
  })
  .catch(error => console.error("Error loading footer-page:", error));