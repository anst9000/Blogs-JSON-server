// javascript for index.html

const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async (term) => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

  if (term) {
    uri += `&q=${term}`;
  }

  let posts = [];

  try {
    const res = await fetch(uri);
    posts = await res.json();
  } catch (error) {
    console.log(error);
  }

  let template = "";

  posts.map((post) => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html?id=${post.id}">read more...</a>
      </div>
    `;
  });

  container.innerHTML = template;
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  renderPosts(searchForm.term.value.trim());
});

// Wait for window to load
window.addEventListener("DOMContentLoaded", () => renderPosts());