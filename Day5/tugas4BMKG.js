function fetchWeatherData() {
    const apiUrl = "https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaTimur.xml";
    const xhr = new XMLHttpRequest();
    var parser,xmlDoc;

    xhr.open("GET", apiUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const xmlData = xhr.responseText;
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(xmlData, "text/xml");
                const temperatur = xmlDoc.getElementsByTagName("parameter")[5].childNodes[1].childNodes[1].innerHTML;
                console.log(xmlData);
                console.log(temperatur);
                const surabayaData = xmlData.querySelector('area[id="501306"]');
                const weatherDataContainer = document.getElementById("weatherData");
                let weatherHTML = "";

                const parameters = surabayaData.querySelectorAll('parameter');
                parameters.forEach(function (parameter) {
                    const parameterName = parameter.getAttribute('id');
                    const parameterDescription = parameter.textContent;
                    weatherHTML += `<p>${parameterName}: ${parameterDescription}</p>`;
                });

                weatherDataContainer.innerHTML = weatherHTML;
            } else {
                console.error('There was a problem with the fetch operation:', xhr.status);
            }
        }
    };

    xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
    fetchWeatherData();
});
