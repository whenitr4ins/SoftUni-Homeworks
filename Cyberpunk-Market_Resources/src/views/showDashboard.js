import { getAllEvents } from "../data/dashboard.js";
import { html, render } from "../library.js";

const dashboardTemplate = (events) => html `
<h3 class="heading">Market</h3>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
            ${events.length ? events.map(itemTemplate) : html `<h3 class="empty">No Items Yet</h3>`}
        </section>`;

        const itemTemplate = (event) => html `
        <div class="item">
            <img src="${event.imageUrl}" alt="example1" />
            <h3 class="model">${event.item}</h3>
            <div class="item-info">
              <p class="price">${event.price}</p>
              <p class="availability">${event.availability}</p>
              <p class="type">Type: ${event.type}</p>
            </div>
            <a class="details-btn" href="/data/cyberpunk/${event._id}">Uncover More</a>
          </div>`;

          export async function showDashboard(ctx) {
              const events = await getAllEvents();
              render(dashboardTemplate(events));
          }