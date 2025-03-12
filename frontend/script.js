const API_URL = "http://localhost:5000/todos";

async function fetchTodos() {
  const response = await fetch(API_URL);
  const todos = await response.json();
  document.getElementById("todoList").innerHTML = todos
    .map(
      (todo) =>
        `<li class="list-group-item">
            <span>${todo.title} ${todo.completed ? "✔️" : ""}</span>
            <button onclick="deleteTodo(${todo.id})" class="btn btn-danger btn-sm">Delete</button>
         </li>`
    )
    .join("");
}

async function addTodo() {
  const title = document.getElementById("todoInput").value;
  if (!title) return;
  
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  document.getElementById("todoInput").value = "";
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTodos();
}

fetchTodos();
