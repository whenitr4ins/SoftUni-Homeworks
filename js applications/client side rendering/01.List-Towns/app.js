import { html, render } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector("form").addEventListener("submit", onSumbit);
const root = document.getElementById("root");

function onSumbit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const townsList = formData.get("towns").split(", ");
    renderer(createTemp(townsList));
}

function createTemp(data) {
    return html`
    <ul>
        ${data.map(town => html`<li>${town}</li>`)}
    </ul>
    `;
}


function renderer(template) {
    render(template, root);
}