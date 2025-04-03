document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById("post-list");
    const loadButton = document.getElementById("load-posts");
    const loader = document.getElementById("loader");

    loadButton.addEventListener("click", () => {
        loader.style.display = "block";
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Помилка при отриманні даних");
                }
                return response.json();
            })
            .then(posts => {
                postList.innerHTML = "";
                posts.forEach(post => {
                    const li = document.createElement("li");
                    li.textContent = post.title;
                    li.addEventListener("click", () => showPostDetail(post));
                    postList.appendChild(li);
                });
            })
            .catch(error => {
                postList.innerHTML = `<li style='color: red;'>${error.message}</li>`;
            })
            .finally(() => {
                loader.style.display = "none";
            });
    });

    function showPostDetail(post) {
        alert(`Заголовок: ${post.title}\n\nТекст: ${post.body}`);
    }
});
