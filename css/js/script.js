document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#ff7675";
    }
  });
});

// IMAGE SLIDER
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

// Auto slide every 4 seconds (safe if slider not on page)
setInterval(() => {
  const slider = document.getElementById("slider-image");
  if (slider) {
    nextImage();
  }
}, 4000);

function changeLocation(place) {
  const mapFrame = document.getElementById("map-frame");

  
  if (!mapFrame) return;

  if (place === "iit") {
    mapFrame.src = "https://www.google.com/maps?q=Illinois+Institute+of+Technology&output=embed";
  } 
  else if (place === "downtown") {
    mapFrame.src = "https://www.google.com/maps?q=Downtown+Chicago&output=embed";
  } 
  else if (place === "home") {
    mapFrame.src = "https://www.google.com/maps?q=Chicago+Illinois&output=embed";
  }
}
