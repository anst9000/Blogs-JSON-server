// javascript for create.html
const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  const uri = "http://localhost:3000/posts";
  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  const method = "POST";
  const body = JSON.stringify(doc);
  const headers = {
    "Content-Type": "application/json",
  };

  await fetch(uri, { method, body, headers });

  window.location.replace("/");
};

form.addEventListener("submit", createPost);
