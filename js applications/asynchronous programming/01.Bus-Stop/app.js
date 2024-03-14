async function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const stopName = document.getElementById("stopName");
    const busesRef = document.getElementById("buses");

    stopName.textContent = "";
    busesRef.innerHTML = "";

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        stopName.textContent = data.name;
        appendChild(Object.entries(data.buses));
    } catch (error) {
        stopName.textContent = "Error";
    }

    function appendChild(data) {
        for ([bus, time] of data) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesRef.appendChild(li);
        }
    }
}