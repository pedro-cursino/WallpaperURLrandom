import api_key from '../config.js';

const city = document.querySelector('.city');
const date = document.querySelector('.date');
const temp_number = document.querySelector('.container-temp');
const weather_t = document.querySelector('.weather');
const low_high = document.querySelector('.low-high');

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

function searchResults(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt_br&units=metric&APPID=${api_key}`)
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
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    date.innerText = dateBuilder(new Date());
    temp_number.innerHTML = Math.round(weather.main.temp) + "°C";
    weather_t.innerText = capitalizeFirstLetter(weather.weather[0].description);
    low_high.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}

function dateBuilder(d) {
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const day = days[d.getDay()]; // 0-6
    const date = d.getDate();
    const month = months[d.getMonth()]; // 0-11
    const year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}