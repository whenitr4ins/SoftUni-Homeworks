async function attachEvents() {
    const dropDown = document.getElementById('posts');
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const commentSection = document.getElementById("post-comments");

    loadBtn.addEventListener("click", onLoad);
    viewBtn.addEventListener("click", onView);

    async function onLoad() {
        const loadResponse = await fetch("http://localhost:3030/jsonstore/blog/posts");
        const loadData = await loadResponse.json();

        dropDown.innerHTML = "";
        for (const loadId in loadData) {
            const loadOption = new Option(loadData[loadId].title, loadId);
            dropDown.add(loadOption);
        }
    }

    async function onView() {
        const viewId = dropDown.value;
        const viewResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts/${viewId}`);
        const viewData = await viewResponse.json();
        document.getElementById("post-title").textContent = viewData.title;
        document.getElementById("post-body").textContent = viewData.body;

        const commentsResponse = await fetch("http://localhost:3030/jsonstore/blog/comments");
        const comments = await commentsResponse.json();
        commentSection.innerHTML = "";
        Object.values(comments).forEach(comment => {
            if(comment.postId == viewId){
                const li = document.createElement("li");
                li.textContent = comment.text;
                commentSection.appendChild(li);
            }
        });
    }

}

attachEvents();