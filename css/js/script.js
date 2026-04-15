function changeLocation(location) {
    const mapFrame = document.getElementById('map-frame');
    
    // Object mapping button keys to Google Maps Embed URLs
    const locations = {
        'iit': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.2354562412!2d-87.62978902340576!3d41.833903668103774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3e37cf71df%3A0x7000770570b240!2sIllinois%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1710000000000",
        
        'downtown': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.360251347683!2d-87.63229712340417!3d41.88514586558238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b348f993%3A0x700a89d36486670!2sThe%20Loop%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1710000000001",
        
        'campus': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5945.393430588147!2d-87.63227495!3d41.8316315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3979434771%3A0x8e83b45a3064d1f2!2s3300%20S%20Federal%20St%2C%20Chicago%2C%20IL%2060616!5e0!3m2!1sen!2sus!4v1710000000002"
    };
    if (locations[location]) {
        mapFrame.src = locations[location];
        console.log("Map changed to: " + location);
    } else {
        console.error("Location not found: " + location);
    }
}
