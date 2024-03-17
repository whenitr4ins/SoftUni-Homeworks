import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const catSection = document.getElementById("allCats");

render(createTemplate(cats), catSection);

function createTemplate(cats) {
    return html`
    <ul>
        ${cats.map(cat => createCatTemplate(cat))}
    </ul>
    `
}

function createCatTemplate(cat) {
    return html`
        <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button @click =${showStatus} class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
        `
}
function showStatus(e){
    const status = e.target.parentElement.querySelector("div");
    const currentStyle = status.style.display;

    if(currentStyle == "none"){
        status.style.display = "block";
        e.target.textContent = "Hide status code";
    }else{
        status.style.display = "none";
        e.target.textContent = "Show status code";
    }
}
