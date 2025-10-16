document.getElementById("weatherForm").addEventListener("submit", getWeather);

async function getWeather(event) {
  event.preventDefault();
  const city = document.getElementById("city").value.trim();
  const apiKey = "67b0d28d8a0f2834a532416aac81fc8c";

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    // Step 1: Get latitude & longitude from Geocoding API
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    );
    const geoData = await geoRes.json();

    if (geoData.length === 0) {
      alert("City not found. Try again.");
      return;
    }

    const {lat, lon} = geoData[0];

    // Step 2: Use lat & lon to get weather data
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const weatherData = await weatherRes.json();

    // Step 3: Display results
    document.getElementById("weatherInfo").innerHTML = `
      <h2>Weather in ${weatherData.name}</h2>
      <p><strong>Latitude:</strong> ${lat}</p>
      <p><strong>Longitude:</strong> ${lon}</p>
      <p><strong>Temperature:</strong> ${weatherData.main.temp} °C</p>
      <p><strong>Condition:</strong> ${weatherData.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${weatherData.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Something went wrong. Please try again.");
  }
}
