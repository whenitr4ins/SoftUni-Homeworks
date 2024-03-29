import { logout } from "./data/users.js";
import { page } from "./library.js"
import { updateNav } from "./utilities.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHomePage } from "./views/homePage.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

updateNav();

page('/', showHomePage);
page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);

page.start();

document.getElementById("logoutBtn").addEventListener('click', async () => {
    logout();
    page.redirect('/');
});