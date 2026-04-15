document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#ff7675";
    }
  });
});

const images = [
  "media/me1.jpg",
  "media/car.jpg",
  "media/iit.jpg"
];

let currentIndex = 0;

function showImage() {
  const slider = document.getElementById("slider-image");
  if (slider) {
    slider.src = images[currentIndex];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

setInterval(() => {
  nextImage();
}, 4000);
