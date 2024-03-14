document.getElementById("loadBooks").addEventListener("click", loadBooks);
document.querySelector('form').addEventListener("submit", submitBooks);

async function loadBooks() {
    const response = await fetch("http://localhost:3030/jsonstore/collections/books");
    const data = await response.json();
    const tbody = document.querySelector("tbody");

    tbody.innerHTML = "";
    Object.entries(data).forEach(([id, book]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn" data-id="${id}">Edit</button>
                <button class="deleteBtn" data-id="${id}">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    tbody.querySelectorAll(".editBtn").forEach(btn => btn.addEventListener("click", editBook));
    tbody.querySelectorAll(".deleteBtn").forEach(btn => btn.addEventListener("click", deleteBook));
}

async function submitBooks(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title").trim();
    const author = formData.get("author").trim();

    if (title && author) {
        const book = { title, author };
        if (e.target.dataset.id) {
            await updateBook(e.target.dataset.id, book);
        } else {
            await createBook(book);
        }
        e.target.reset();
        delete e.target.dataset.id;
        await loadBooks();
    }
}

async function editBook(e) {
    const bookId = e.target.dataset.id;
    const bookDetails = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`).then(res => res.json());
    const form = document.querySelector("form");
    form["title"].value = bookDetails.title;
    form["author"].value = bookDetails.author;
    form.dataset.id = bookId;
}
async function deleteBook(e) {
    const bookId = e.target.dataset.id;
    await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
        method: 'DELETE'
    });
    await loadBooks();
}

async function createBook(book) {
    await fetch("http://localhost:3030/jsonstore/collections/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
    });
}

async function updateBook(id, book) {
    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
    });
}