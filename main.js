let todos = []
let searchedTodos = []
let searchText = ""
let todoCount = 0

class TodoItem {
  constructor(title, content) {
    this.id = ++todoCount
    this.title = title
    this.content = content
    this.isDone = false
  }
}

const todoAddForm = document.querySelector("#todoForm")
const todoTitleInput = document.querySelector("input#title")
const todoContentInput = document.querySelector("textarea#content")
const todoSearchForm = document.querySelector("#searchForm")
const todoSearchInput = document.querySelector("#searchQuery")
const todoTableBody = document.querySelector("#tableBody")

const renderTodos = () => {
  todoTableBody.innerHTML = ``

  searchedTodos = todos.filter(x => x.title.includes(searchText))

  for (const todo of searchedTodos) {
    todoTableBody.innerHTML += `
    <tr>
    <td>${todo.id}</td>
    <td>${todo.title}</td>
    <td>${todo.content}</td>
    <td class="d-flex justify-content-center">
    <button class="btn btn-danger" onclick="deleteTodo(${todo.id})"><i class="bi bi-trash"></i></button>
    ${todo.isDone ? 
    (`<button class="btn btn-success ms-3" onclick="switchTodo(${todo.id})"><i class="bi bi-check-circle"></i></button>`)
    : 
    (`<button class="btn btn-warning ms-3" onclick="switchTodo(${todo.id})"><i class="bi bi-clock"></i></button>`)}
    </td>
    </tr>
    `
  }
}

const addTodoToList = (todoTitle, todoContent) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (todos.find(x => x.title === todoTitle&& x.content === todoContent)) {
        rej(new Error("Cette todo est déjà dans la liste !"))
      } else {
        todos.push(new TodoItem(todoTitle, todoContent))
        res();
      }
    }, 1000)
  })
}

const removeTodoFromList = (todoId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let foundTodo = todos.find(x => x.id === todoId)
      if (foundTodo) {
        todos.splice(todos.indexOf(foundTodo), 1)
        res()
      } else {
        rej(new Error("Cette todo n'existe pas !"))
      }
    }, 1000)
  })
}

const switchTodoStatus = (todoId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let foundTodo = todos.find(x => x.id === todoId)
      console.log(foundTodo);
      if (foundTodo) {
        foundTodo.isDone = !foundTodo.isDone
        res()
      } else {
        rej(new Error("Cette todo n'existe pas !"))
      }
    }, 1000)
  })
}

todoAddForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    await addTodoToList(todoTitleInput.value, todoContentInput.value);
    renderTodos();
  } catch (error) {
    console.error(error);
  }
})

todoSearchInput.addEventListener('input', (e) => {
  searchText = e.target.value
  renderTodos();
})

todoSearchForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  searchText = todoSearchInput.value
  renderTodos();
})

const deleteTodo = async (todoId) => {
  await removeTodoFromList(todoId);
  renderTodos();
}

const switchTodo = async (todoId) => {
  await switchTodoStatus(todoId);
  renderTodos();
}