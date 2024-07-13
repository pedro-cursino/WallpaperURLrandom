import api_key from '../config.js';

const temp_number = document.querySelector('.container-temp');

window.addEventListener('load', () => {
    const lat = -23.0264;
    const long = -45.5553;
    coordResults(lat, long);
});

function coordResults(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&units=metric&APPID=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`ERROR: status ${response.status}`);
            }
            return response.json();
        })
        .then(response => {
            displayResults(response);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayResults(weather) {
    temp_number.innerHTML = Math.round(weather.main.temp);
}