function changeLocation(location) {
    const mapFrame = document.getElementById('map-frame');

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
