function attachcodeents() {
    const locationInput = document.getElementById("location");
    const forecastSection = document.getElementById("forecast");
    const currentSection = document.getElementById("current");
    const upcomingSection = document.getElementById("upcoming");
    const baseWeatherURL = `http://localhost:3030/jsonstore/forecaster/locations`;
    const currentWeatherURL = `http://localhost:3030/jsonstore/forecaster/today/`;
    const upcomingWeatherURL = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

    document.getElementById("submit").addEventListener("click", getWeather);

    async function getWeather(ev) {
        try {
            const userInput = locationInput.value;
            forecastSection.style.display = "block";
            const locationResponse = await fetch(baseWeatherURL);
            const locationData = await locationResponse.json();
            const currentLocationData = locationData.find(x => x.name === userInput);

            if (currentLocationData) {
                currentWeather(currentLocationData.code);
                threeDayForecast(currentLocationData.code);
            } else {
                forecastSection.textContent = "Error: Location not found";
            }
        } catch (error) {
            forecastSection.textContent = "Error";
        }
    }

    async function currentWeather(code) {
        const response = await fetch(currentWeatherURL + code);
        const data = await response.json();

        const forecastsDiv = document.createElement("div");
        forecastsDiv.classList.add("forecasts");

        const conditionSymbol = document.createElement("span");
        conditionSymbol.classList.add("condition");
        conditionSymbol.classList.add("symbol")
        conditionSymbol.innerHTML = weatherByCondition(data.forecast.condition);

        const conditionSpan = document.createElement("span");
        conditionSpan.classList.add("condition");

        const forecastName = document.createElement("span");
        forecastName.classList.add("forecast-data");
        forecastName.textContent = data.name;

        const forecastDegrees = document.createElement("span");
        forecastDegrees.classList.add("forecast-data");
        forecastDegrees.innerHTML = `${data.forecast.low + "\u00B0"}/${data.forecast.high + "\u00B0"}`;

        const forecastCondition = document.createElement("span");
        forecastCondition.classList.add("forecast-data");
        forecastCondition.textContent = data.condition;

        forecastsDiv.appendChild(conditionSymbol);
        forecastsDiv.appendChild(conditionSpan);

        conditionSpan.appendChild(forecastName);
        conditionSpan.appendChild(forecastDegrees);
        conditionSpan.appendChild(forecastCondition);

        currentSection.appendChild(forecastsDiv);
    }

    async function threeDayForecast(code) {
        const response = await fetch(upcomingWeatherURL + code);
        const data = await response.json();

        const forecastInfoDiv = document.createElement("div");
        forecastInfoDiv.classList.add("forecast-info");

        /////////////////////////////////////----///////////////

        const span1 = document.createElement("span");
        span1.classList.add("upcoming");

        const symbolSpan = document.createElement("span");
        symbolSpan.classList.add("symbol");
        symbolSpan.innerHTML = weatherByCondition(data.forecast[0].condition);

        const upcomingDegree = document.createElement("span");
        upcomingDegree.classList.add("forecast-data");
        upcomingDegree.innerHTML = `${data.forecast[0].low + "\u00B0"}/${data.forecast[0].high + "\u00B0"}`;

        const upcomingCondition = document.createElement("span");
        upcomingCondition.classList.add("forecast-data");
        upcomingCondition.textContent = data.forecast[0].condition;

        span1.appendChild(symbolSpan);
        span1.appendChild(upcomingDegree);
        span1.appendChild(upcomingCondition);

        /////////////////////////////////////----///////////////

        const span2 = document.createElement("span");
        span2.classList.add("upcoming");

        const symbolSpan2 = document.createElement("span");
        symbolSpan2.classList.add("symbol");
        symbolSpan2.innerHTML = weatherByCondition(data.forecast[1].condition);

        const upcomingDegree2 = document.createElement("span");
        upcomingDegree2.classList.add("forecast-data");
        upcomingDegree2.innerHTML = `${data.forecast[1].low + "\u00B0"}/${data.forecast[1].high + "\u00B0"}`;

        const upcomingCondition2 = document.createElement("span");
        upcomingCondition2.classList.add("forecast-data");
        upcomingCondition2.textContent = data.forecast[1].condition;

        span2.appendChild(symbolSpan2);
        span2.appendChild(upcomingDegree2);
        span2.appendChild(upcomingCondition2);

        /////////////////////////////////////----///////////////

        const span3 = document.createElement("span");
        span3.classList.add("upcoming");

        const symbolSpan3 = document.createElement("span");
        symbolSpan3.classList.add("symbol");
        symbolSpan3.innerHTML = weatherByCondition(data.forecast[2].condition);

        const upcomingDegree3 = document.createElement("span");
        upcomingDegree3.classList.add("forecast-data");
        upcomingDegree3.innerHTML = `${data.forecast[2].low + "\u00B0"}/${data.forecast[2].high + "\u00B0"}`;

        const upcomingCondition3 = document.createElement("span");
        upcomingCondition3.classList.add("forecast-data");
        upcomingCondition3.textContent = data.forecast[2].condition;

        span3.appendChild(symbolSpan3);
        span3.appendChild(upcomingDegree3);
        span3.appendChild(upcomingCondition3);
        /////////////////////////////////////----///////////////        

        forecastInfoDiv.appendChild(span1);
        forecastInfoDiv.appendChild(span2);
        forecastInfoDiv.appendChild(span3);

        upcomingSection.appendChild(forecastInfoDiv);
    }


    function weatherByCondition(condition) {
        switch (condition) {
            case "Sunny": return "&#x2600";
            case "Partly sunny": return "&#x26C5";
            case "Overcast": return "&#x2601";
            case "Rain": return "&#x2614";
            default: return condition;
        }
    }

}

attachcodeents();