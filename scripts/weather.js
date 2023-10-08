// select HTML elements in the document
const currentTemp = document.querySelector ('#current-temp') ;
const weatherIcon = document. querySelector ('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43&lon=111&appid=4e4be2e8b1f37fc6c8dc8bae22fd7937&units=imperial';
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayResults(data) {
    // Check if data contains the necessary properties
    if (data && data.main && data.weather && data.weather.length > 0) {
        // Update the temperature element
        currentTemp.textContent = `${Math.round(data.main.temp)}°F`;

        // Update the weather icon (assuming you have an <img> element)
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIcon.alt = data.weather[0].description;

        // Update the caption description (assuming you have a <figcaption> element)
         captionDesc.textContent = data.weather[0].description;
    } else {
        // Handle the case where the data doesn't have the expected properties
        console.log("Invalid data format");
    }
}
