function lockedProfile() {

    const buttons = Array.from(document.querySelectorAll("button"));

    for (let btn of buttons) {
        btn.addEventListener("click", revealInfo)
    }

    function revealInfo(e) {
        let reveal = e.currentTarget.parentElement.querySelector("div");
        let currentTargetedBtn = e.target.parentElement.querySelector("input[type='radio']:checked");

        if (currentTargetedBtn.value == "unlock") {
            if (e.currentTarget.textContent == "Show more") {
                e.currentTarget.textContent = "Hide it";
                reveal.style.display = "block";
            } else {
                e.currentTarget.textContent = "Show more";
                reveal.style.display = "none";
            }
        }
    }
}