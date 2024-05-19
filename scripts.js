document.addEventListener("DOMContentLoaded", function () {
  const contactMenu = document.querySelector(".contact-menu");

  contactMenu.addEventListener("mouseover", function () {
    this.querySelector(".dropdown").style.display = "block";
  });

  contactMenu.addEventListener("mouseout", function () {
    this.querySelector(".dropdown").style.display = "none";
  });
});
