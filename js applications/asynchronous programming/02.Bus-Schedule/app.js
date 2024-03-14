function solve() {

    const infoTab = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const url = `http://localhost:3030/jsonstore/bus/schedule/`
    const stop = {
        stopName: "",
        nextStopId: "depot"
    };

    async function depart() {
        try {
            const response = await fetch(url + stop.nextStopId);
            const data = await response.json();
            stop.stopName = data.name;
            stop.nextStopId = data.next;
            infoTab.textContent = `Next stop ${stop.stopName}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            infoTab.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        infoTab.textContent = `Arriving at ${stop.stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();