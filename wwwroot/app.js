// JavaScript function
window.getGeoLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    Latitude: position.coords.latitude,
                    Longitude: position.coords.longitude
                });
            },
            (error) => {
                reject(error);
            }
        );
    });
};
