document.querySelector("form").addEventListener("submit", onRegister);
document.getElementById("logout").style.display = "none";

function onRegister(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let rePass = formData.get("rePass");

    if (!email || !password || password != rePass) {
        alert("Try again!")
    } else {
        createUser({ email, password });
        window.location = "index.html";
    }
}

async function createUser(data) {
    const response = await fetch("http://localhost:3030/users/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    });
    const userData = await response.json();

    sessionStorage.setItem("userData", JSON.stringify(userData));
}
