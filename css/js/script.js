document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#ff7675";
    }
  });
});
// IMAGE SLIDER (GALLERY FIX)
const images = [
  "media/me1.jpg",
  "media/m.jpg",
  "media/oy.jpg"
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

// Auto slide (only runs if slider exists)
setInterval(() => {
  const slider = document.getElementById("slider-image");
  if (slider) {
    nextImage();
  }
}, 4000);
function changeLocation(location) {
    const mapFrame = document.getElementById('map-frame');

    // Prevent errors if not on map page
    if (!mapFrame) return;

    const locations = {
        iit: "https://www.google.com/maps?q=Illinois+Institute+of+Technology&output=embed",
        downtown: "https://www.google.com/maps?q=Millennium+Park+Chicago&output=embed",
        campus: "https://www.google.com/maps?q=McCormick+Tribune+Campus+Center&z=18&output=embed"
    };

    if (locations[location]) {
        mapFrame.src = locations[location];
        console.log("Showing location: " + location);
    } else {
        console.error("Location not found: " + location);
    }
}
