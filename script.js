function getAQI() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    document.getElementById("result").innerText = "Please enter a city name";
    return;
  }

  const url = `https://api.waqi.info/feed/${city}/?token=9bf251c9004bdb28ddbfd3c47a5cc7c287fba50e`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.status === "ok") {
        document.getElementById("result").innerHTML =
          `AQI in ${city}: <b>${data.data.aqi}</b>`;
      } else {
        document.getElementById("result").innerText = "City not found";
      }
    })
    .catch(() => {
      document.getElementById("result").innerText = "Error fetching AQI data";
    });
}