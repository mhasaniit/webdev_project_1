function changeLocation(location) {
    const mapFrame = document.getElementById('map-frame');
    
    // We use a dictionary to store the long Google Embed URLs
    const locations = {
        'iit': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.100984857416!2d-87.6293699233857!3d41.83689436814041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c695843468b%3A0x7d06e23b030438!2sIllinois%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
        
        'downtown': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123456789!2d-87.623177!3d41.881832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb444444444%3A0x4444444444444444!2sChicago%20Loop!5e0!3m2!1sen!2sus!4v1710000000000",
        
        'campus': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.22222!2d-87.627!3d41.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c695843468b%3A0x7d06e23b030438!2sIIT%20Campus!5e0!3m2!1sen!2sus!4v1710000000000"
    };

    // Update the src only if the location exists in our list
    if (locations[location]) {
        mapFrame.src = locations[location];
        console.log("Navigating to: " + location);
    } else {
        console.error("Location not found in database.");
    }
}
