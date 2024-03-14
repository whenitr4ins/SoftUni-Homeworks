let userData = JSON.parse(sessionStorage.getItem("userData"));
const userNav = document.getElementById("user");
const guestNav = document.getElementById("guest");
document.getElementById("logout").addEventListener("click", onLogout);
const welcomeName = document.querySelector("nav p span");
const loadBtn = document.querySelector(".load");
loadBtn.addEventListener("click", onLoad);
const addButton = document.querySelector(".add");
document.getElementById("addForm").addEventListener("submit", addNewForm);
const catchesContainer = document.getElementById("catches");


function isOwner(id) {
    return userData?._id == id;
}

updateNav();
function updateNav() {
    if (userData) {
        welcomeName.textContent = userData.email;
        guestNav.style.display = "none";
        userNav.style.display = "inline-block";
        addButton.disabled = false;
    } else {
        welcomeName.textContent = "guest";
        guestNav.style.display = "inline-block";
        userNav.style.display = "none";
        addButton.disabled = true;
    }
}

async function onLogout() {
    await fetch("http://localhost:3030/users/logout", {
        method: "GET",
        headers: { "X-Authorization": userData.accessToken }
    });
    sessionStorage.clear();
    userData = null;

    // Disable update and delete buttons for existing catches
    const updateButtons = document.querySelectorAll('.update');
    const deleteButtons = document.querySelectorAll('.delete');
    updateButtons.forEach(button => {
        button.disabled = true;
    });
    deleteButtons.forEach(button => {
        button.disabled = true;
    });

    updateNav();
}


async function onLoad() {
    const response = await fetch("http://localhost:3030/data/catches");
    const data = await response.json();

    data.forEach(x => {
        let div = listCatches(x);
        catchesContainer.appendChild(div);
    });
}


function listCatches(catchData) {
    let catchDiv = document.createElement("div");
    catchDiv.classList.add("catch");

    catchDiv.innerHTML += `<label>Angler</label>`;
    catchDiv.innerHTML += `<input type="text" class="angler" value="${catchData.angler}">`;
    catchDiv.innerHTML += `<label>Weight</label>`;
    catchDiv.innerHTML += `<input type="text" class="weight" value="${catchData.weight}">`;
    catchDiv.innerHTML += `<label>Species</label>`;
    catchDiv.innerHTML += `<input type="text" class="species" value="${catchData.species}">`;
    catchDiv.innerHTML += `<label>Location</label>`;
    catchDiv.innerHTML += `<input type="text" class="location" value="${catchData.location}">`;
    catchDiv.innerHTML += `<label>Bait</label>`;
    catchDiv.innerHTML += `<input type="text" class="bait" value="${catchData.bait}">`;
    catchDiv.innerHTML += `<label>Capture Time</label>`;
    catchDiv.innerHTML += `<input type="number" class="captureTime" value="${catchData.captureTime}">`;


    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update");
    updateBtn.dataset.id = catchData._id;
    updateBtn.textContent = "Update";
    updateBtn.addEventListener("click", async () => {
        try {
            const angler = catchDiv.querySelector(".angler").value;
            const weight = catchDiv.querySelector(".weight").value;
            const species = catchDiv.querySelector(".species").value;
            const location = catchDiv.querySelector(".location").value;
            const bait = catchDiv.querySelector(".bait").value;
            const captureTime = catchDiv.querySelector(".captureTime").value;

            const updatedCatch = {
                angler,
                weight,
                species,
                location,
                bait,
                captureTime
            };

            const response = await fetch(`http://localhost:3030/data/catches/${catchData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": userData.accessToken
                },
                body: JSON.stringify(updatedCatch)
            });
            
            if (response.ok) {
                // Handle successful update, if needed
                console.log("Catch updated successfully!");
            } else {
                // Handle error response
                console.error("Error updating catch:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating catch:", error.message);
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.dataset.id = catchData._id;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", async () => {
        try {
            const response = await fetch(`http://localhost:3030/data/catches/${catchData._id}`, {
                method: "DELETE",
                headers: {
                    "X-Authorization": userData.accessToken
                }
            });
            if (response.ok) {
                // Remove the catch from the UI
                catchDiv.remove();
            } else {
                // Handle error response
                console.error("Error deleting catch:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting catch:", error.message);
        }
    });
    

    if (isOwner(catchData._ownerId)) {
        // Enable update and delete buttons
        updateBtn.disabled = false;
        deleteBtn.disabled = false;
    } else {
        // Disable update and delete buttons
        updateBtn.disabled = true;
        deleteBtn.disabled = true;
    }
    catchDiv.appendChild(updateBtn);
    catchDiv.appendChild(deleteBtn);
    return catchDiv;
    // catchesContainer.appendChild(catchDiv);
}



async function addNewForm(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let angler = formData.get("angler");
    let weight = formData.get("weight");
    let species = formData.get("species");
    let location = formData.get("location");
    let bait = formData.get("bait");
    let captureTime = formData.get("captureTime");
    let _ownerId = userData._id;

    let data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
        _ownerId
    };

    try {
        const response = await fetch("http://localhost:3030/data/catches", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "X-Authorization": userData.accessToken
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const newCatchData = await response.json();
            const newCatchDiv = listCatches(newCatchData);
            catchesContainer.appendChild(newCatchDiv);
            
            // Reset the form fields
            e.target.reset();
        } else {
            console.error("Error adding new catch:", response.statusText);
        }
    } catch (error) {
        console.error("Error adding new catch:", error.message);
    }
}
