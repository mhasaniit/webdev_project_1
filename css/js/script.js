function changeLocation(location) {
    const mapFrame = document.getElementById('map-frame');
    
    // We define the embed URLs for each location here
    const locations = {
        'iit': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.333830784227!2d-87.6294711!3d41.8347062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c694a5e3f31%3A0xc3b836c968270591!2sIllinois%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1710000000000",
        
        'downtown': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123456789!2d-87.623177!3d41.881832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca558106ff3%3A0x66225a153c0a4e!2sMillennium%20Park!5e0!3m2!1sen!2sus!4v1710000000000",
        
        'campus': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5945.89123456!2d-87.627!3d41.832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c6ea!2sBronzeville%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1710000000000"
    };

    // This updates the 'src' of the iframe to the new location
    if (locations[location]) {
        mapFrame.src = locations[location];
        console.log("Showing location: " + location);
    } else {
        console.error("Location not found: " + location);
    }
}
