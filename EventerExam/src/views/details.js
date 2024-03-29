import { deleteEvent, getEventId } from "../data/events.js";
import { get } from "../data/request.js";
import { html, render, page } from "../library.js";
import { getUserData } from "../utilities.js";

const detailsTemplate = (data, hasUser, isOwner, onDelete) => html`
<section id="details">
  <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <p id="details-title">${data.name}</p>
      <p id="details-category">
        Category: <span id="categories">${data.category}</span>
      </p>
      <p id="details-date">
      Date:<span id="date">${data.date}</span></p>
        <div id="info-wrapper">
        <div id="details-description">
          <span>${data.description}</span>
        </div>

        </div>

            <h3>Going: <span id="go">0</span> times.</h3>

            <!--Edit and Delete are only for creator-->
            ${hasUser ? html`
        <div id="action-buttons">
            ${isOwner ? html`
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}=>Delete</a>` : html`
            <a href="javascript:void(0)" id="go-btn">Going</a>`}
        </div>` : null}
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const event = await getEventId(id);

  const user = getUserData();
  const hasUser = !!user;
  const isOwner = hasUser && user._id === event._ownerId;

  render(detailsTemplate(event, hasUser, isOwner, onDelete));

  async function onDelete() {
    const confirmed = confirm('Are you sure you want to delete this event?');
    if (confirmed) {
      await deleteEvent(id);
      page.redirect('/catalog');
    }
  }
}