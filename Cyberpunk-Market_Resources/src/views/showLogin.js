import { html, page, render } from "../library.js";
import { login } from "../data/users.js";
import { createSubmitHandler, updateNavBar } from "../utilities.js";

const loginTemplate = (onLogin) => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onLogin}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>`;

export function showLogin(ctx) {
    render(loginTemplate(createSubmitHandler(onLogin)));
}

async function onLogin({ email, password }, form) {
    if (!email || !password) {
        return;
    }

    await login(email, password);
    updateNavBar();
    page.redirect('/');
}
