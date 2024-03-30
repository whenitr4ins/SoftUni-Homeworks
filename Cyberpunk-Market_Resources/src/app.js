import { logout } from "./data/users.js";
import { page } from "./library.js";
import { updateNavBar } from "./utilities.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHomePage } from "./views/homePage.js";
import { showDashboard } from "./views/showDashboard.js";
import { showLogin } from "./views/showLogin.js";
import { showRegister } from "./views/showRegister.js";

updateNavBar();

page('/', showHomePage);
page('/dashboard', showDashboard);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/data/cyberpunk/:id', showDetails);
page('/edit/:id', showEdit);

page.start();

document.getElementById("logoutBtn").addEventListener('click', async () => {
    logout();
    page.redirect('/');
});