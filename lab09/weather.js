function reportResults(responseText) {
    let weatherHTML = '';

    if (responseText !== 'error') {
        const data = JSON.parse(responseText);
        const { temperature_2m, precipitation, cloud_cover } = data.current_weather;
        const cloudEmoji = cloud_cover > 50 ? '☁️' : '☀️';

        weatherHTML = `
            Precipitation: ${precipitation} "<br>
            Temperature: ${temperature_2m}°F
        `;
        
        if (document.getElementById('precipitation')) {
            document.getElementById('precipitation').innerHTML = `${precipitation}"`;
        }
        if (document.getElementById('temperature')) {
            document.getElementById('temperature').innerHTML = `${temperature_2m}°F`;
        }
        if (document.getElementById('weather-icon')) {
            document.getElementById('weather-icon').innerText = cloudEmoji;
        }
    } else {
        weatherHTML = '<h4>Error Fetching Data</h4>';
    }

    const weatherContainer = document.querySelector('.weather .row .col-md-6');
    if (weatherContainer) {
        weatherContainer.innerHTML = weatherHTML;
    }
}
const endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,precipitation,cloud_cover&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'

fetch(endpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => reportResults(JSON.stringify(data)))
    .catch(() => reportResults('error'));
