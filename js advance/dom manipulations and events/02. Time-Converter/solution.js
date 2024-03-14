function attachEventsListeners() {

    const buttons = Array.from(document.querySelectorAll("input[type = 'button']"));

    for (let btn of buttons) {
        btn.addEventListener("click", Converter);

        function Converter(event) {
            let currentUnitInput = event.currentTarget.parentElement.children[1];
            let value = Number(currentUnitInput.value);
            let unit = currentUnitInput.id;

            switch (unit) {
                case "days": newValue(value); break;
                case "hours": newValue(value / 24); break;
                case "minutes": newValue(value / 24 / 60); break;
                case "seconds": newValue(value / 24 / 60 / 60); break;
            }
        }

        function newValue(days) {
            let input = document.querySelectorAll("input[type = 'text']");
            input[0].value = days;
            input[1].value = days * 24;
            input[2].value = days * 24 * 60;
            input[3].value = days * 24 * 60 * 60;
        }
    }
}