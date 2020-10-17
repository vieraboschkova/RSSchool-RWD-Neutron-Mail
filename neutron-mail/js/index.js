function navOpen() {
  const x = document.getElementById("navLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
    navCloseButton.style.display = "none";
    navOpenButton.style.display = "block";
  } else {
    x.style.display = "flex";
    navCloseButton.style.display = "block";
    navOpenButton.style.display = "none";
  }

}

const navOpenButton = document.getElementById("openNavButton");
const navCloseButton = document.getElementById("closeNavButton");
navOpenButton.addEventListener('click', navOpen)
navCloseButton.addEventListener('click', navOpen)
