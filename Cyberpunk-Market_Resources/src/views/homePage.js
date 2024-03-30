import { html, render } from "../library.js";

const homeTemplate = () => html`
<section id="hero">
          <img src="./images/home.png" alt="home" />
          <p>We know who you are, we will contact you</p>
        </section>`;

export function showHomePage(ctx) {
    render(homeTemplate());
}