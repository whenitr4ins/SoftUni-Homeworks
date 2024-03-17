import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/dropdown";
const menu = document.getElementById('menu');
document.querySelector("form").addEventListener("submit", addItem);

onLoad();

async function onLoad() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const options = Object.values(data).map(optionTemplate);
        update(options);
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function optionTemplate(option) {
    return html`<option value="${option._id}">${option.text}</option>`;
}

function update(options) {
    render(options, menu);
}

async function addItem(e) {
    e.preventDefault();
    const input = document.getElementById("itemText");
    const text = input.value.trim();
    if (!text) {
        alert('Please enter a non-empty value');
        return;
    }
    input.value = "";
    try {
        await addItemData({ text });
        onLoad();
    } catch (error) {
        console.error("Error adding item:", error);
        alert("Failed to add item. Please try again later.");
    }
}

async function addItemData(data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to add item: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        throw new Error("Error adding item data:", error);
    }
}