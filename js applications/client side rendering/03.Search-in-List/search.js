import { html, render } from "./node_modules/lit-html/lit-html.js"
import { towns } from "./towns.js";

const townsList = document.getElementById("towns");
const searchButton = document.querySelector("button");
const searchText = document.getElementById("searchText");
const result = document.getElementById("result");

searchButton.addEventListener("click", search);

update(towns);

function search() {
   const searchTerm = searchText.value;
   const match = towns.filter(town => town.includes(searchTerm));
   update(match);
   render(html`${match.length} matches found`, result);
}
function update(match) {
   render(ulTemp(towns, match), townsList);
}
function ulTemp(towns, match) {
   return html`<ul>${towns.map(town => liTemp(town, match?.includes(town)))}</ul>`;
}
function liTemp(town, isActive) {
   return html`<li class=${isActive ? "active" : ""}>${town}</li>`;
}