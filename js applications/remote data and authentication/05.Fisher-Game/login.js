document.querySelector("form").addEventListener("submit", onLogin);
document.getElementById("logout").style.display = "none";


function onLogin(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");

    if (!email || !password) {
        alert("Try again!")
    } else {
        loginUser({ email, password });
        // window.location = "index.html";
    }
}

async function loginUser(data) {
    const response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        alert("Incorrect email or password. Please try again.");
        const emailInput = document.querySelector('input[name="email"]');
        const passwordInput = document.querySelector('input[name="password"]');
        if (emailInput && passwordInput) {
            emailInput.value = "";
            passwordInput.value = "";
        }
        return;
    }

    const userData = await response.json();
    sessionStorage.setItem("userData", JSON.stringify(userData));
    window.location = "index.html"
}